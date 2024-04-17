import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Api from './Utils/Api';
import * as SecureStore from 'expo-secure-store';


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
  return (
    <ClerkProvider 
    publishableKey={Api.CLERK_API_KEY}
    tokenCache={tokenCache}
    >
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Signed IN</Text>
        </SignedIn>

        <SignedOut>
          <LoginScreen/>
        </SignedOut>
        <StatusBar style="auto" />
      </View>
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
