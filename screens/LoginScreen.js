import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
        <View>
            <StatusBar style='light' />
                <Image
                  style={{width:200 , height:200}}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png',
                  }}
                />
                <View style={styles.inputContainer}>
                  <Input placeholder="Email" autoFocus type="email" value={email} />
                  <Input placeholder="Password" secureTextEntry type="password" />
                </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {},
})
