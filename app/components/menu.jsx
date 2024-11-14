import { Pressable, View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from '../../style/Estilos';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from 'expo-router';

export default function Menu({ mostrarMenu }) {

  const [usuario, setUsuario] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  useEffect(() => {
    const getUsuario = async () => {
      const usuario = await AsyncStorage.getItem("usuario");
      usuario ? setUsuario(usuario) : setUsuario('nose');
    }

    getUsuario();
  }, []);

  return (
    <View style={ styles.menu }>
      <View style={ styles.cabeceraMenu }>
        <Pressable onPress={() => { mostrarMenu(); router.replace('/(usuario)/usuario'); }} style={ styles.cabeceraIcono }>
          <MaterialCommunityIcons name="account" size={30} color="black" />
        </Pressable>
        <Text style={styles.cabeceraUsuario}>{usuario}</Text>
        <Pressable onPress={mostrarMenu} style={ styles.cerrarMenu }>
          <MaterialCommunityIcons name="keyboard-backspace" size={30} color="white" />
        </Pressable>
      </View>
      <View style={ styles.linksMenu }>
      <Pressable onPress={() => { mostrarMenu(); router.replace('/home'); }}   
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'black' }, styles.cajaLinksMenu]}>
          <Text style={[styles.linkMenu, { color: isPressed ? 'black' : 'white' }]}>Hola</Text>
        </Pressable>
        <Pressable onPress={() => { mostrarMenu(); router.replace('/home'); }}   
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'black' }, styles.cajaLinksMenu]}>
          <Text style={[styles.linkMenu, { color: isPressed ? 'black' : 'white' }]}>Hola</Text>
        </Pressable>
        <Pressable onPress={() => { mostrarMenu(); router.replace('/home'); }}   
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'black' }, styles.cajaLinksMenu]}>
          <Text style={[styles.linkMenu, { color: isPressed ? 'black' : 'white' }]}>Hola</Text>
        </Pressable>
        <Pressable onPress={() => { mostrarMenu(); router.replace('/home'); }}   
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'black' }, styles.cajaLinksMenu]}>
          <Text style={[styles.linkMenu, { color: isPressed ? 'black' : 'white' }]}>Hola</Text>
        </Pressable>
        
      </View>
    </View>
  )
}