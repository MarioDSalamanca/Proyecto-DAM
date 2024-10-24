import { View, Text, SafeAreaView } from "react-native";
import styles from "../../style/Estilos";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login() {
  return (
    <View style={styles.ViewLogin}>
      <Text style={styles.login}></Text>
    </View>
  );
}
