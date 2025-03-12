import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a mi aplicación!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
