// IssuesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';

const IssuesScreen = ({ route, navigation }) => {
  const { token, repo } = route.params; // Obtém o token e o repositório
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/issues', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error('Erro ao buscar issues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [token]);

  const renderIssueItem = ({ item }) => (
    <View style={styles.issueItem}>
      <Text style={styles.issueTitle}>{item.title}</Text>
      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate('IssueDetailsScreen', { issue: item, token })}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando issues...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Issues Atribuídas</Text>
      <FlatList
        data={issues}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderIssueItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  issueItem: {
    marginBottom: 15,
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IssuesScreen;
