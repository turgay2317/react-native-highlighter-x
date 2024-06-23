import React from 'react';
import { Text } from 'react-native';

interface Rule {
	pattern: RegExp;
	style?: object;
	onPress?: (word: string) => void;
	onLongPress?: (word: string) => void;
  }
  
  interface HighlighterXProps {
	text: string;
	rules: Rule[];
	customContainerStyle?: object;
	customTextStyle?: object;
	nonMatchTextStyle? : object;
  }
  
  export const HighlighterX: React.FC<HighlighterXProps> = ({ text, rules, customContainerStyle, customTextStyle, nonMatchTextStyle }) => {
  
	const renderTextWithRules = (text: string, rules: Rule[]) => text && 
	  text.split(/\r?\n/).map((line, index) => (
		<Text key={index}>
		  {renderWordsWithRules(line, rules)}
		  <Text>{"\n"}</Text>
		</Text>
	  ));
  
	const renderWordsWithRules = (row: string, rules: Rule[]) => {
	  return row.split(/(\s+)/).map((word, index) => {
		  const { style, onPress, onLongPress} = getMatchingRule(word, rules) || {};
		  const handlePress = onPress ? () => onPress(word) : undefined;
		  const handleLongPress = onLongPress ? () => onLongPress(word) : undefined;
  
		  return (
			  <Text 
				  key={index} style={[style || nonMatchTextStyle, customTextStyle]} 
				  onPress={handlePress} 
				  onLongPress={handleLongPress} 
				  >
			  {word}
			  </Text>
		  );
	  });
	};
  
	const getMatchingRule = (word: string, rules: Rule[]): { 
	  style?: object, 
	  onPress?: (word: string) => void,
	  onLongPress? : (word: string) => void,
	  } | null => {
	  for (const rule of rules) {
		const { pattern, style, onPress, onLongPress } = rule;
		if (word.match(pattern)) {
		  return { style, onPress, onLongPress };
		}
	  }
	  return null;
	};
  
	return <Text style={customContainerStyle}>{renderTextWithRules(text, rules)}</Text>;
  };
export default HighlighterX;
