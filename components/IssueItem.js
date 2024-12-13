import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const IssueItem = ({ issue, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ padding: 10 }}>
      <Text>{issue.title}</Text>
      <Text>Status: {issue.state}</Text>
      <Text>{issue.body ? issue.body.substring(0, 100) : 'Sem descrição'}</Text>
    </View>
  </TouchableOpacity>
);

export default IssueItem;
