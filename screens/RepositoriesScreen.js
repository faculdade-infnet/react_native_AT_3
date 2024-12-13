// RepositoriesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';

const RepositoriesScreen = ({ route, navigation }) => {
  const { token } = route.params; // Obtém o token
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [token]);

  const renderRepoItem = ({ item }) => (
    <View style={styles.repoItem}>
      <Text style={styles.repoName}>{item.name}</Text>
      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate('RepositoryDetailsScreen', { repo: item, token })}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando repositórios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Repositórios</Text>
      <FlatList
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRepoItem}
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
  repoItem: {
    marginBottom: 15,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RepositoriesScreen;
