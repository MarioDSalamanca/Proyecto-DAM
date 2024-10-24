import { View } from "react-native";
import Login from "./(login)/login";
import styles from "../style/Estilos";

export default function Index() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
