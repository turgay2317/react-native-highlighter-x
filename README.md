# react-native-highlighter-x

Library for highlighting texts in React-Native

## Installation

```sh
npm install react-native-highlighter-x
```

## Usage

```js
import HightlighterX from 'react-native-highlighter-x';

// ...

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

<HighlighterX 
	rules={rules} 
	text={"Hello my name is @Turgay and my email is turgay2317@gmail.com my linkedin account is https://www.linkedin.com/in/turgayceylan/"}
/>


```

## Screenshots

<img width="293" alt="Screenshot 2024-06-22 at 18 15 40" src="https://github.com/turgay2317/react-native-highlighter-x/assets/90829101/574084e9-3721-4551-a1fa-f158ff11ba59"/>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
