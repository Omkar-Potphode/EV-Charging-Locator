import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Api from './Utils/Api';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { UserLocationContext } from './App/Context/UserLocationContext';


const tokenCache = {
  async getToken(key){
    try{
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },

  async saveToken(key, value){
    try{
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
}

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg]= useState(null);

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if(status !== 'granted'){
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  },[]);

  let text = 'Waiting...'
  if(errorMsg){
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <ClerkProvider 
    publishableKey={Api.CLERK_API_KEY}
    tokenCache={tokenCache}
    >
      <UserLocationContext.Provider value={{location, setLocation}}>
        <View style={styles.container}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>
          </SignedIn>

          <SignedOut>
            <LoginScreen/>
          </SignedOut>
          <StatusBar style="auto" />
        </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
});
