import React, { useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image , TouchableWithoutFeedback} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import {useState} from "react";
import { Keyboard } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        navigation.replace('Home');
      }
    })

    return unsubscribe;
  }, [])

  const signIn = () => {

  }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
                <Image
                  style={{width:200 , height:200}}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png',
                  }}
                />
                <View style={styles.inputContainer}>
                  <Input 
                  placeholder="Email" 
                  autoFocus 
                  type="email" 
                  value={email} 
                  onChangeText={(text) => setEmail(text)}
                  />
                  <Input 
                  placeholder="Password" 
                  secureTextEntry 
                  type="password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  />
                </View>

                <Button style={styles.button} onPress={signIn} title="Login" />
                <Button onPress={() => navigation.navigate('Register')} style={styles.button} type="outline" title="Register" />
                <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:"center",
      padding: 10,
      backgroundColor: "white",
    },
    inputContainer: {
      width: 300,
    },
    button: {
      width: 200,
      marginTop: 10,
    },
})
