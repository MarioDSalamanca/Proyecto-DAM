import { Text, View, Image } from 'react-native';

// Mis componentes
import styles from './Estilos';
import Bienvenido from './Componentes/Bienvenido';

const icono = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icono} style={{width: 100, height: 100}}/>
      <Bienvenido />
    </View>
  );
}
