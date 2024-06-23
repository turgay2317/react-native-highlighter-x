# react-native-highlighter-x

Library for highlighting texts in React-Native

<img width="719" alt="Screenshot 2024-06-23 at 13 37 50" src="https://github.com/turgay2317/react-native-highlighter-x/assets/90829101/60cc7d06-4ca0-4c49-81a1-6dcc011db9ee">

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

<HighlighterX 
	rules={rules}
	customTextStyle={{fontWeight:'500'}}
	customContainerStyle={{backgroundColor: 'white', padding:10}}
	nonMatchTextStyle={{color:'#666'}}
	text={"Hello, today is a very beautiful day! If you want to check out our new project, you can visit https://npmjs.com For questions, you can reach turgay2317@gmail.com. Also, you can follow the users @turgay and @ali to stay updated with the latest developments. In case of an emergency, please contact us at +90 555 444 3322. Our server's IP address has been updated to 192.168.1.1."}
/>


```

## Props of Text

<table>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>word</td>
            <td>string</td>
            <td>''</td>
            <td>The word or text fragment to be displayed in the text component.</td>
        </tr>
        <tr>
            <td>style</td>
            <td>object</td>
            <td>null</td>
            <td>Custom style applied. Can be combined with customTextStyle.</td>
        </tr>
        <tr>
            <td>customTextStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Default style applied. Can be combined with style.</td>
        </tr>
        <tr>
            <td>onPress</td>
            <td>(word: string) => void</td>
            <td>undefined</td>
            <td>Function called when the text component is pressed. If defined, the text becomes clickable.</td>
        </tr>
        <tr>
            <td>onLongPress</td>
            <td>(word: string) => void</td>
            <td>undefined</td>
            <td>Function called when the text component is long-pressed. If defined, the text becomes long-clickable.</td>
        </tr>
    </table>

## Props of HighlighterX

  <table>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>text</td>
            <td>string</td>
            <td>''</td>
            <td>The text to be processed and highlighted or made clickable according to the rules.</td>
        </tr>
        <tr>
            <td>rules</td>
            <td>Array</td>
            <td>[]</td>
            <td>An array of rules, each defining a pattern and the style and behavior applied to it.</td>
        </tr>
        <tr>
            <td>customTextStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Default style applied to text components. Can be combined with styles applied by rules.</td>
        </tr>
        <tr>
            <td>customContainerStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Default style applied to the container holding the text.</td>
        </tr>
		<tr>
            <td>nonMatchTextStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Default style applied to non-matching texts.</td>
        </tr>
    </table>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
