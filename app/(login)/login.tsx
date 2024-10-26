import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../../style/Estilos";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const handlePress = () => {
  isFlipped.value = !isFlipped.value;
};

const FlipCard = ({
  isFlipped,
  direction = 'y',
  duration = 500,
  InicioSesion,
  Registrate,
}) => {
  const isDirectionX = direction === 'x';

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[ regularCardAnimatedStyle ]}>
        {InicioSesion}
      </Animated.View>

      <Animated.View
        style={[ flippedCardAnimatedStyle ]}>
        {Registrate}
      </Animated.View>
    </View>
  );
};

const InicioSesion = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.h2Login}>Nombre de usuario:</Text>
      <TextInput style={styles.inputsLogin} />
      <Text style={styles.h2Login}>Contraseña:</Text>
      <TextInput style={styles.inputsLogin} />
      <Pressable style={styles.botonIniciarSesion}>
        <Text style={styles.textoIniciarSesion}>Iniciar Sesión</Text>
      </Pressable>
      <Text style={{ textAlign: "center", marginVertical: 10, color: "red" }}>o</Text>
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.botonRegistrarse} onPress={handlePress}>
          <Text style={styles.textoRegistrarse}>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Registrate = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.h2Login}>Nombre de usuario:</Text>
      <TextInput style={styles.inputsLogin} />
      <Text style={styles.h2Login}>Contraseña:</Text>
      <TextInput style={styles.inputsLogin} />
      <Pressable style={styles.botonIniciarSesion}>
        <Text style={styles.textoIniciarSesion}>Registrate</Text>
      </Pressable>
      <Text style={{ textAlign: "center", marginVertical: 10, color: "red" }}>o</Text>
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.botonRegistrarse} onPress={handlePress}>
          <Text style={styles.textoRegistrarse}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function Login() {

  const isFlipped = useSharedValue(false);
  
  return (
      <FlipCard
        isFlipped={isFlipped}
        InicioSesion={<InicioSesion />}
        Registrate={<Registrate />}
      />
      
  );

}

/*import { View, Text, TextInput, Pressable } from "react-native";
import { FlipInEasyX, FlipOutEasyX } from 'react-native-reanimated';
import { styles } from "../../style/Estilos";

  return (
    <View style={styles.container}>
      <View style={styles.viewLogin}>
        <Text style={styles.h1Login}>VitalPower</Text>
        <View style={styles.login}>
          <Text style={styles.h2Login}>Nombre de usuario:</Text>
          <TextInput style={styles.inputsLogin} />
          <Text style={styles.h2Login}>Nombre de usuario:</Text>
          <TextInput style={styles.inputsLogin} />
          <Pressable style={styles.botonIniciarSesion}>
            <Text style={styles.textoIniciarSesion}>Iniciar Sesión</Text>
          </Pressable>
          <Text style={{ textAlign: "center", marginVertical: 10, color: "red" }}>o</Text>
          <View style={{ alignItems: "center" }}>
            <Pressable style={styles.botonRegistrarse}>
              <Text style={styles.textoRegistrarse}>Registrate</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}*/
