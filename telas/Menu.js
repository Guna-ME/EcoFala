import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from './Styles'; 

export default function MainScreen({ navigation }) {
  return (
    <View style={globalStyles.menuContainer}>
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('ListarCenarios')}
      >
        <Text style={globalStyles.menuButtonText}>LISTAR CENÁRIOS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('GerarNovoCenario')}
      >
        <Text style={globalStyles.menuButtonText}>GERAR NOVO CENÁRIO</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('VisualizarRelatorios')}
      >
        <Text style={globalStyles.menuButtonText}>VISUALIZAR RELATÓRIOS</Text>
      </TouchableOpacity>
    </View>
  );
}
