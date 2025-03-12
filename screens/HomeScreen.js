import React, {useEffect} from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config.js';
import logo from '../assets/logo2.png';
import background from '../assets/fondo2.jpg';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen1 from '../screens/HomeScreen1';
import Tabs from "../Tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from '../stacks/HomeStackScreen.js';


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = './../assets/home.png'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

  function LoginScreen() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
    }

    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Bienvenido');
      })
      .catch(error => {
        console.log(error)
      })
    }


    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
        <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>
        <ScrollView contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
          <BlurView intensity={100}>
            <View style={styles.login}>
              <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="cuenta@outlook.com" />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="password" secureTextEntry={true}/>
              </View>
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Iniciar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </ScrollView>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  
  export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Registrar/Iniciar">
        <Stack.Screen name="Registrar/Iniciar" component={LoginScreen}  />
        <Stack.Screen name="Bienvenido" component={HomeStackScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }

});
