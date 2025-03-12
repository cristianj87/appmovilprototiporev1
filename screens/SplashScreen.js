import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Button } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000); // Cambia el tiempo según tu preferencia
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/animation2.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;