import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Usuario() {

  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const getUsuario = async () => {
      const usuario = await AsyncStorage.getItem("usuario");
      usuario ? setUsuario(usuario) : setUsuario('nose');
    }

    getUsuario();
  }, []);

  return (
    <View>
        <Text>Hola {usuario}</Text>
    </View>
  );
}