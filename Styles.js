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
});

export default globalStyles;
