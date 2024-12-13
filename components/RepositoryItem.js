import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RepositoryItem = ({ repo, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ padding: 10 }}>
      <Text>{repo.name}</Text>
      <Text>{repo.description}</Text>
      <Text>🌟 {repo.stargazers_count} Estrelas</Text>
    </View>
  </TouchableOpacity>
);

export default RepositoryItem;
