// AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const [token, setToken] = useState('');

  const handleLogin = () => {
    if (token) {
      // Passa o token para a tela de repositórios
      navigation.navigate('RepositoriesScreen', { token });
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/9919?v=4' }} 
        style={styles.profileImage}
      />
      <Text style={styles.header}>Login no GitHub</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu token do GitHub"
        value={token}
        onChangeText={setToken}
      />
      <Button title="Acessar" onPress={handleLogin} />
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
  },
});

export default AuthScreen;
