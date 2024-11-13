import { Pressable, View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from '../../style/Estilos';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Menu({ mostrarMenu }) {

  const [usuario, setUsuario] = useState('');

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
        <Pressable onPress={mostrarMenu} style={ styles.cerrarMenu }>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
        </Pressable>
        <Text style={{ padding: 10 }}>Hola {usuario}</Text>
      </View>
    </View>
  )
}