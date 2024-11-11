import { Text, View } from "react-native";
import { styles } from "../style/Estilos";

export default function Home({ menu }) {
  return (
    <View style={styles.container}>
      {menu && (
        <View
          style={{
            zIndex: -10,
            flex: 1,
            width: "70%",
            height: "100%",
            backgroundColor: "#DDDDDD",
            position: "absolute",
            left: 0,
            top: 0,
            padding: 16,
          }}
        >
          <Text>Hola, este es el menú</Text>
        </View>
      )}
      <Text>Contenido principal de la página</Text>
    </View>
  );
}
