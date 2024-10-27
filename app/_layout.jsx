import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mis archivos
import { styles } from "../style/Estilos";

export default function Layout() {

  // Utilizar el Hook useRouter para manejar las vistas
  // Utilizar useState para manejar los estados de auth
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cuando se inicie la vista se ejecutará el useEffect una vez para comprobar la autenticación
  useEffect(() => {
    const comprobarAuth = async () => {
      try {
        // AsyncStorage es para acceder al almacenamiento local persistente
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    comprobarAuth();
  
  }, []);
 
  // Redirigir si auth es false cuando cambie el estado de auth y cuando acabe de cargar el login
  useEffect(() => {
    if (!loading && !auth) {
      router.replace("/login");
    }
  }, [auth, loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#DDDDDD" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={({ route }) => ({
          headerShown: route.name === "login",
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTintColor: "white",
          headerTitle: "VitalPower",
          headerTitleAlign: "center",
        })}
      />
    </View>
  );
}
