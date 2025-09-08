import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../assets/styles';

const data = [
  {
    id: '1',
    nome: 'Lamborghini Aventador',
    img: require('../assets/imgs/Lamborghini/lamborghini_aventador.jpg'),
    descricao: 'Desempenho impressionante com motor V8 biturbo.',
  },
  {
    id: '2',
    nome: 'Lamborghini Huracan',
    img: require('../assets/imgs/Lamborghini/lamborghini_huracan.jpg'),
    descricao: 'Potente V12 e design sofisticado.',
  },
];

export default function FerrariScreen() {
  const [busca, setBusca] = useState('');
  const [selecionado, setSelecionado] = useState(null);

  const filtrados = data.filter((carro) =>
    carro.nome.toLowerCase().includes(busca.trim().toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.title}>{item.nome}</Text>
      <TouchableOpacity
        onPress={() => setSelecionado(item)}
        style={styles.descricaoButton}
        accessibilityLabel={`Ver detalhes de ${item.nome}`}
      >
        <Text style={styles.descricaoButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Text style={styles.title_inicio}>Modelos da Lamborghini</Text>
       
        <TextInput
          style={styles.input}
          placeholder="Buscar modelo..."
          value={busca}
          onChangeText={setBusca}
          accessibilityLabel="Campo de busca por modelo de carro"
          placeholderTextColor="#000"
        />

        <FlatList
          data={filtrados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#666' }}>
              Nenhum modelo encontrado.
            </Text>
          }
        />

        <Modal
          visible={!!selecionado}
          animationType="slide"
          transparent
          onRequestClose={() => setSelecionado(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selecionado && (
                <>
                  <Text style={styles.modalTitle}>{selecionado.nome}</Text>
                  <Image source={selecionado.img} style={styles.modalImage} />
                  <Text style={styles.modalDescription}>{selecionado.descricao}</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelecionado(null)}
                  >
                    <Text style={styles.closeButtonText}>Fechar</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

