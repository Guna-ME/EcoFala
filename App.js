import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'C:\Users\Dudam\EcoFala\telas\Login.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho para a tela de login
        />
        {/* Adicione outras telas, como Cadastro e RedefinirSenha, aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}