import * as React from 'react';
import { Linking, View } from 'react-native';
import HighlighterX from 'react-native-highlighter-x';

export default function App() {
	const rules = [
		{
		  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		  style: {color: 'blue'},
		  onPress: (word:string) => Linking.openURL(`mailto:${word}`),
		},
		{
		  pattern: /^[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
		  style: {color: 'green'},
		  onPress: (word:string) => Linking.openURL(word),
		},
		{
		  pattern: /@(\w+)/g,
		  style: {color:'pink'},
		  onPress: (username:string) => {
			console.log("Clicked username: ",username)
		  }
		},
		// Add more custom rules as needed
	  ];

    return (
		<View>
        	<HighlighterX 
				rules={rules} 
				text={"Hello my name is @Turgay and my email is turgay2317@gmail.com my linkedin account is https://www.linkedin.com/in/turgayceylan/"}
				/>
		</View>
    )
}
