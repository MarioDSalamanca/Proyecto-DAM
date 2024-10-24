import { Text, View } from "react-native";
import styles from "../style/Estilos";

export default function Bienvenido() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Voy a empezar con mi nuevo proyecto de DAM!!!
      </Text>
    </View>
  );
}
