// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from 'C:\Users\Dudam\EcoFala\Styles.js';

export default function LoginScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoContainer}>
        <Text style={globalStyles.logoText}>LOGO</Text>
      </View>

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry
      />

      <TouchableOpacity style={globalStyles.button}>
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
