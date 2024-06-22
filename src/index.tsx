import React from 'react';
import { Text } from 'react-native';

interface Rule {
  pattern: RegExp;
  style?: object;
  onPress?: (word: string) => void;
}

interface HighlighterXProps {
  text: string;
  rules: Rule[];
}

export const HighlighterX: React.FC<HighlighterXProps> = ({ text, rules }) => {

  const renderTextWithRules = (text: string, rules: Rule[]) => text && 
    text.split(/\r?\n/).map((line, index) => (
      <Text key={index}>
        {renderWordsWithRules(line, rules)}
        <Text>{"\n"}</Text>
      </Text>
    ));

  const renderWordsWithRules = (row: string, rules: Rule[]) => {
    return row.split(/(\s+)/).map((word, index) => {
      const { style, onPress } = getMatchingRule(word, rules) || {};
      return (
        <Text key={index} style={style} onPress={() => onPress && onPress(word)}>
          {word}
        </Text>
      );
    });
  };

  const getMatchingRule = (word: string, rules: Rule[]): { style?: object, onPress?: (word: string) => void } | null => {
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
