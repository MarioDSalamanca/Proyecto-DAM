import { Stack } from "expo-router";
import styles from "../style/Estilos";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTintColor: "white",
          headerTitle: "VitalPower",
          headerTitleAlign: "center",
        }}
      />
    </View>
  );
}
