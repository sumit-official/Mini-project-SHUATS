import React,{ useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from "react-native-elements"
import { StatusBar } from 'expo-status-bar';
import { auth } from "../firebase";

const register = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser =>{
        authUser.user.update({
            displayName: name,
            photoURL: imageUrl || "https://qph.fs.quoracdn.net/main-qimg-69a663c52040e14f9e8c01ca629c7f0f.png"
        })
    })
    .catch(error => alert(error.message));
};

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>
                Create a account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            
            <Button 
                containerStyle={styles.button}
                raised
                onPress={register}
                title='Register'/>
                <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'white',
    },
    buton:{
        width: 200,
        marginTop:10,
    },
    inputContainer:{
        width:300,
    }
})
