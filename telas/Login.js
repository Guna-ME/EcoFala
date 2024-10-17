import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { auth } from './firebaseConfig';
import globalStyles from './Styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Pacientes'); 
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('Erro', 'O formato do email é inválido!');
            break;
          case 'auth/user-not-found':
            Alert.alert('Erro', 'Usuário não encontrado!');
            break;
          case 'auth/wrong-password':
            Alert.alert('Erro', 'Senha incorreta!');
            break;
          default:
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
        }
      });
  };

  return (
    <View style={globalStyles.loginContainer}>
      <View style={globalStyles.logoContainer}>
        <Text style={globalStyles.logoText}>LOGO</Text>
      </View>

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={globalStyles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={globalStyles.linkText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
          <Text style={globalStyles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
