import React, { useLayoutEffect, useState} from "react"
import {stylesheet, Text, View} from "react-native";
import { Button, Input} from "react-native-elements";

const AddChatScreen = ({ navigation }) => {
	const [input, setInput] = useState("");

	useLayoutEffect({) =>{
		navigation.setOptions({
			title: "Add a new Chat",
			headerBackTitle: "Chats",
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
		  <Input
		    placeholder="Enter a Chat name"
			value={Input}
			onChangeText={(text) => setInput(text)}
			leftIcon={
				
			}
			/>
		</View>
			);
		};



export default AddChatScreen;

const styles = stylesheet.create({
	container: {},
});
