import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen'; // Importa la pantalla Home si es necesario
import Tabs from './Tabs'; // Importa las pestañas

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* Barra de estado */}
      <StatusBar style="auto" />

      {/* Stack Navigator */}
      <Stack.Navigator>
        {/* Pantalla Splash */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        
        {/* Pantalla Home que contiene las pestañas */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        
        {/* Puedes agregar más pantallas aquí si lo deseas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
