// RepositoryDetailsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';

const RepositoryDetailsScreen = ({ route }) => {
  const { repo, token } = route.params;
  const [repoDetails, setRepoDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setRepoDetails(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do repositório:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [repo, token]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando detalhes do repositório...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.repoName}>{repoDetails.name}</Text>
      <Text style={styles.repoDescription}>{repoDetails.description}</Text>
      <Button title="Ver Issues" onPress={() => navigation.navigate('IssuesScreen', { repo: repoDetails, token })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  repoName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  repoDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default RepositoryDetailsScreen;
