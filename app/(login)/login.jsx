import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { styles } from "../../style/Estilos";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InicioSesion = ({ vuelta }) => {
    return (
      <View style={styles.login}>
        <Text style={styles.h2Login}>Nombre de usuario:</Text>
        <TextInput style={styles.inputsLogin} />
        <Text style={styles.h2Login}>Contraseña:</Text>
        <TextInput style={styles.inputsLogin} secureTextEntry />
        <Pressable style={styles.botonIniciarSesion}>
          <Text style={styles.textoIniciarSesion}>Iniciar Sesión</Text>
        </Pressable>
        <Text style={{ textAlign: "center", marginVertical: 10, color: "red" }}>o</Text>
        <View style={{ alignItems: "center" }}>
          <Pressable style={styles.botonRegistrarse} onPress={vuelta}>
            <Text style={styles.textoRegistrarse}>Registrate</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const Registrate = ({ vuelta }) => {
    return (
      <View style={styles.login}>
        <Text style={styles.h2Login}>Nombre de usuario:</Text>
        <TextInput style={styles.inputsLogin} />
        <Text style={styles.h2Login}>Contraseña:</Text>
        <TextInput style={styles.inputsLogin} secureTextEntry />
        <Pressable style={styles.botonIniciarSesion}>
          <Text style={styles.textoIniciarSesion}>Registrate</Text>
        </Pressable>
        <Text style={{ textAlign: "center", marginVertical: 10, color: "red" }}>o</Text>
        <View style={{ alignItems: "center" }}>
          <Pressable style={styles.botonRegistrarse} onPress={vuelta}>
            <Text style={styles.textoRegistrarse}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>
    );
  };

const FlipCard = ({
  isFlipped,
  direction = 'y',
  duration = 1000,
  InicioSesion,
  Registrate,
}) => {
  const isDirectionX = direction === 'x';

  const inicioSesionAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const RegistrateAnimatedStyle = useAnimatedStyle(() => {
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
        style={[
          flipCardStyles.regularCard,
          inicioSesionAnimatedStyle,
        ]}
        pointerEvents={isFlipped.value ? 'none' : 'auto'}>
        {InicioSesion}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          RegistrateAnimatedStyle,
        ]}
        pointerEvents={isFlipped.value ? 'auto' : 'none'}>
        {Registrate}
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: 'absolute',
    zIndex: 1,
  },
  flippedCard: {
    backfaceVisibility: 'hidden',
    zIndex: 2,
  },
});

export default function Login() {
  const isFlipped = useSharedValue(false);

  function vuelta() {
    isFlipped.value = !isFlipped.value;
  };

  return (
    <View style={styles.container}>
    <View style={styles.viewLogin}>
      <Text style={styles.h1Login}>VitalPower</Text>
      <FlipCard
        isFlipped={isFlipped}
        InicioSesion={<InicioSesion vuelta={vuelta}/>}
        Registrate={<Registrate  vuelta={vuelta}/>}
      />
    </View>
  </View>
  );
}