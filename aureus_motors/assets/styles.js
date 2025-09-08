import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  // Estilo para o Tab Navigator
  tabNavigatorOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#1E2A8A', // Azul escuro
      borderTopWidth: 0,
      height: 60,
    },

    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: '600',
      color: '#FFF',
      marginBottom: 6,
    },
  },

  // Título principal da Home
  title_inicio: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    margin: '0px 0px 24px 0px', // top, right, bottom, left
    letterSpacing: 1.2,
    lineHeight: 24,
    marginHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
    marginHorizontal: 16,
    margin: '0px 0px 20px 0px', // top, right, bottom, left
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.01,
    shadowRadius: 8,
  },

  // Navegação Horizontal (barra superior de marcas)
  navBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },

  navButton: {
    backgroundColor: '#1E2A8A', // Azul escuro
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom: 12,
  },

  navButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  // Input de busca
  input: {
    height: 50,
    borderColor: '#1E2A8A', // Azul escuro
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 16,
    fontSize: 16,
    margin: '5px 20px 20px 20px', // top, right, bottom, left
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    color: '#333',
  },

  // Cards de carros
  item: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 6,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    transition: 'all 0.3s ease',
  },

  img: {
    width: '100%',
    height: 200,
    borderRadius: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  homeimg: {
    width: '100%',
    height: 120,
    borderRadius: 0,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  descricaoButton: {
    marginTop: 14,
    backgroundColor: '#1E2A8A', // Azul escuro
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    transition: 'all 0.3s ease',
  },

  descricaoButtonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 24,
    width: width * 0.85,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },

  modalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
    marginBottom: 12,
  },

  modalImage: {
    width: width * 0.8,
    height: width * 0.52,
    borderRadius: 18,
    marginVertical: 16,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  modalDescription: {
    fontSize: 18,
    color: '#555',
    textAlign: 'justify',
    marginTop: 16,
    lineHeight: 24,
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#1E2A8A', // Azul escuro
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 14,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    transition: 'all 0.3s ease',
  },

  closeButtonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
