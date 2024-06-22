import React from 'react';
import { Text } from 'react-native';

export const HighlighterX = ({ text, rules }) => {

  const renderTextWithRules = (text, rules) => text && 
    text.split(/\r?\n/).map((line, index) => (
      <Text key={index}>
        {renderWordsWithRules(line, rules)}
        <Text>{"\n"}</Text>
      </Text>
    ));

  const renderWordsWithRules = (row, rules) => {
    return row.split(/(\s+)/).map((word, index) => {
      const { style, onPress } = getMatchingRule(word, rules) || {};
      return (
        <Text key={index} style={style} onPress={() => onPress && onPress(word)}>
          {word}
        </Text>
      );
    });
  };

  const getMatchingRule = (word, rules) => {
    for (const rule of rules) {
      const { pattern, style, onPress } = rule;
      if (word.match(pattern)) {
        return { style, onPress };
      }
    }
    return null;
  };

  return <Text>{renderTextWithRules(text, rules)}</Text>;
};


export default HighlighterX;
