import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Para ícones personalizados

import PorscheScreen from './screens/PorscheScreen';
import LamborghiniScreen from './screens/LamborghiniScreen';
import HomeScreen from './screens/HomeScreen';
import FerrariScreen from './screens/FerrariScreen';
import AudiScreen from './screens/AudiScreen';

import styles from './assets/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={styles.tabNavigatorOptions}
        initialRouteName="Home" // Definindo a tela inicial como Home
      >
        <Tab.Screen
          name="Porsche"
          component={PorscheScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="car-sport-outline"
                color={focused ? '#efefef' : '#979797'} // Cor personalizada para o ícone pressionado e não pressionado
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lamborghini"
          component={LamborghiniScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="car-sport-outline"
                color={focused ? '#efefef' : '#979797'} // Cor personalizada para o ícone pressionado e não pressionado
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="home-outline"
                color={focused ? '#efefef' : '#979797'} // Cor personalizada para o ícone pressionado e não pressionado
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ferrari"
          component={FerrariScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="car-sport-outline"
                color={focused ? '#efefef' : '#979797'} // Cor personalizada para o ícone pressionado e não pressionado
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Audi"
          component={AudiScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="car-sport-outline"
                color={focused ? '#efefef' : '#979797'} // Cor personalizada para o ícone pressionado e não pressionado
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
