import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('./../../assets/images/logo.png')}
            style={styles.logoImg}
            />

            <Image source={require('./../../assets/images/ev-charging.png')}
            style={styles.bgImage}
            />

            <View style={{padding: 20}}>
                <Text style={styles.heading}>
                    EV Locator: Find Charging Spots
                </Text>
                <Text style={styles.desc}>
                    Find EV Charging Station near you, plan trip and so much more in just one click
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontSize: 17,
                    }}>Login with Google</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    logoImg:{
        height:50,
        width:240,
        resizeMode: 'contain'
    },
    bgImage:{
        width: '100%',
        height: 225,
        marginTop: 20,
        resizeMode: 'cover',
    },
    heading:{
        fontSize:25,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20
    },
    desc:{
        fontSize: 17,
        marginTop: 15,
        textAlign: 'center',
    },
    button:{
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 70,
        backgroundColor: Colors.PRIMARY,
    }
});