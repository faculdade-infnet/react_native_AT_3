// UserScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform, ActivityIndicator } from 'react-native';

const UserScreen = ({ route }) => {
  const { token } = route.params; // Obtém o token da navegação
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando informações do usuário...</Text>
      </View>
    );
  }

  if (!user) {
    return <Text>Usuário não encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.profileImage} />
      <Text style={styles.username}>{user.login}</Text>
      <Text style={styles.token}>Token: {token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  token: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserScreen;
