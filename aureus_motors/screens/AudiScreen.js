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
    nome: 'Audi R8',
    img: require('../assets/imgs/Audi/audi_r8.jpg'),
    descricao: 'Esportivo com tração quattro e motor V10.',
  },
  {
    id: '2',
    nome: 'Audi RS e-tron GT',
    img: require('../assets/imgs/Audi/audi_etron.jpg'),
    descricao: 'Desempenho elétrico com sofisticação e tecnologia.',
  },
];

export default function AudiScreen() {
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
        accessibilityLabel={`Ver detalhes de ${item.nome}`}>
        <Text style={styles.descricaoButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <Text style={styles.title_inicio}>Modelos da Audi</Text>

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
          onRequestClose={() => setSelecionado(null)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selecionado && (
                <>
                  <Text style={styles.modalTitle}>{selecionado.nome}</Text>
                  <Image source={selecionado.img} style={styles.modalImage} />
                  <Text style={styles.modalDescription}>
                    {selecionado.descricao}
                  </Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelecionado(null)}>
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
