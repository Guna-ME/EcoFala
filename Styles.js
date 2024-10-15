import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

  // Estilos da tela de login
  loginContainer: {
    flex: 1,
    backgroundColor: '#72C3B2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#72C3B2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5,
  },

  // Estilos do menu
  menuContainer: {
    flex: 1,
    backgroundColor: '#FFF', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#72C3B2', 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, 
  },
  menuButtonText: {
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilos da tela de seleção de pacientes
  pacientesContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  pacientesTitulo: {
    fontSize: 36,
    color: '#72C3B2',
    marginBottom: 20,
    textAlign: 'center',
  },
  pacienteContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  pacienteFoto: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  pacienteNome: {
    color: '#72C3B2',
    marginTop: 5,
  },

  // Estilos da tela de cadastro
  cadastroContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 8,
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 12,
    width: '90%',
  },
  label: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#72C3B2',
  },
  cadastroInput: {
    height: 40,
    borderColor: '#72C3B2',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 25,
  },
  cadastroButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#72C3B2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cadastroButtonText: {
    color: 'WHITE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default globalStyles;
