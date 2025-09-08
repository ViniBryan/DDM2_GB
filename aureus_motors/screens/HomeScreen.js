import React, { useMemo } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from '../assets/styles';

export default function HomeScreen({ navigation }) {
  // Dados dos carros
  const cars = useMemo(() => [
    {
      id: '1',
      title: 'Porsche',
      img: require('../assets/imgs/Marcas/Marca_P.png'),
      description:
        'Um carro esportivo luxuoso alemão, reconhecido por sua performance impressionante e design elegante.',
    },
    {
      id: '2',
      title: 'Lamborghini',
      img: require('../assets/imgs/Marcas/Marca_L.png'),
      description:
        'Uma supermáquina italiana ousada e agressiva, com um design inconfundível e desempenho incomparável.',
    },
    {
      id: '3',
      title: 'Ferrari',
      img: require('../assets/imgs/Marcas/Marca_F.png'),
      description:
        'A verdadeira essência da herança italiana no automobilismo, combinando paixão, velocidade e engenharia de precisão.',
    },
    {
      id: '4',
      title: 'Audi',
      img: require('../assets/imgs/Marcas/Marca_A.png'),
      description:
        'Inovação em engenharia automotiva alemã, com designs modernos e tecnologia de ponta para uma experiência de condução única.',
    },
  ]);

  // Renderizar cada item de carro
  const renderCarItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.homeimg} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.description}
      </Text>
      <TouchableOpacity
        style={styles.descricaoButton}
        onPress={() => navigation.navigate(item.title)}
        accessibilityLabel={`Ver detalhes sobre ${item.title}`}>
        <Text style={styles.descricaoButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F3F3" />

      <ScrollView>
        <Text style={styles.title_inicio}>Aureus Motors </Text>

        {/* Descrição sobre a página de carros */}
        <Text style={styles.subtitle}>
          Bem-vindo à Aureus Motors! Explore carros exclusivos e de alto
          desempenho, com marcas renomadas que unem luxo, design e potência.
          Encontre o carro dos seus sonhos!
        </Text>

        {/* Cards em grade */}
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={renderCarItem}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.cardColumnWrapper}
          contentContainerStyle={styles.cardContentContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
