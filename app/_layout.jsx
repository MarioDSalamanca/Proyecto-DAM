import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Pressable, View, Text } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);

  // Cuando se inicie la vista se ejecutará el useEffect una vez para comprobar la autenticación
  useEffect(() => {
    
    const comprobarAuth = async () => {
      try {
        // AsyncStorage es para acceder al almacenamiento local persistente
        const token = await AsyncStorage.getItem("authToken");
        if (!token) {
          router.replace("/");
        }
      } catch (error) {
        console.error("Error al comprobar la autenticación:", error);
      } finally {
        setLoading(false);
      }
    }

    comprobarAuth();

  }, []);

  if (loading) {
    // Mostrar un indicador de carga mientras se valida el token
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#303030" }}>
        <ActivityIndicator size="100" color="red" />
      </View>
    );
  }

  function mostrarMenu() {
    setMenu(!menu);
    if (menu) {
      
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem("authToken");
    router.replace("/");
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={({ route }) => ({
          headerShown: route.name === "home",
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTintColor: "red",
          headerTitle: "VitalPower",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable onPress={mostrarMenu}>
              <MaterialCommunityIcons name="menu" size={24} color="red" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={logout}>
              <MaterialCommunityIcons name="logout" size={24} color="red" />
            </Pressable>
          ),
        })}
      />
      {menu && (
        <View style={{ position: "absolute", width: "70%", height: "100%", backgroundColor: "#DDDDDD", zIndex: 10 }}>
          <Pressable onPress={mostrarMenu} style={{ marginTop: 30 }}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
          </Pressable>
          <Text style={{ padding: 10 }}>Menú lateral</Text>
        </View>
      )}
    </View>
  );
}
