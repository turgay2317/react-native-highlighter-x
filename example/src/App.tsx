import * as React from 'react';
import { Linking, View } from 'react-native';
import HighlighterX from 'react-native-highlighter-x';

export default function App() {
	const rules = [
	{
		pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		style: {color: 'white', backgroundColor: 'blue', padding: 3},
		onPress: (word : string) => Linking.openURL(`mailto:${word}`),
	},
	{
		pattern: /^https?:\/\/[^\s$.?#].[^\s]*$/,
		style: {color: 'white', backgroundColor:'green'},
		onPress: (word : string) => Linking.openURL(word),
	},
	{
		pattern: /@(\w+)/g,
		style: {color: '#0f0fc0', fontWeight:'bold'},
		onPress: (username : string) => {
			console.log("Clicked username: ", username);
		},
		onLongPress: (username : string) => {
			console.log("Long pressed : ", username);
		}
	},
	{
		pattern: /\b(\d{1,3}(\.\d{1,3}){3})\b/g,
		style: {color: 'red'},
		onPress: (ip : string) => {
			console.log("Clicked IP address: ", ip);
		}
	},
	{
		pattern: /\b(\+?\d{1,4}?[-.\s]?)?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}\b/g,
		style: {color: 'purple'},
		onPress: (phoneNumber : string) => {
			console.log("Clicked phone number: ", phoneNumber);
		}
	},
	// Add more custom rules as needed
	];

    return (
		<View>
			<HighlighterX 
				text={"Hello, today is a very beautiful day! If you want to check out our new project, you can visit https://npmjs.com For questions, you can reach turgay2317@gmail.com. Also, you can follow the users @turgay and @ali to stay updated with the latest developments. In case of an emergency, please contact us at +90 555 444 3322. Our server's IP address has been updated to 192.168.1.1."}
				rules={rules}
				customTextStyle={{fontWeight:'500'}}
				customContainerStyle={{backgroundColor: 'white', padding:10}}
				nonMatchTextStyle={{color:'#666'}}
				/>
		</View>
    )
}
