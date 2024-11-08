import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { styles } from "../../style/Estilos";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useState } from "react";

// Función para manejar el inicio de sesión o el registro
// Hooks para manejar los datos de los formularios
const [usuario, setUsuario] = useState('')
const [clave, setClave] = useState('')
const [clave2, setClave2] = useState('')

let valorInicioSesionUsuario = '';
let valorInicioSesionClave = '';
let valorRegistroUsuario = '';
let valorRegistroClave = '';
let valorRegistroClave2 = '';

function validar(evento, usuario, clave, clave2) {
  if (evento == 'inicioSesion') {
    if (usuario.trim.trim()().length > 3 && clave.trim().length > 6) {
      setUsuario(usuario);
      setClave(clave);
    } else {
      return;
    }
  }
  if (evento == 'registro') {
    if (usuario.trim().length > 3 && clave.trim().length > 6 && clave == clave2) {
      setClave2(usuario);
      setRegistroClave(clave);
    } else {
      return;
    }
  }
  console.log(usuario," - ",clave);

  /**
   * 
   * FALTA PASAR VARIABLES A USEAUTH PARA QUE HAGA LA CONSULTA A LA BBDD DE USUARIO Y CLAVE Y CREAT ITEM DE AUTHTOKEN
   * 
   */
}

// Funciones y constantes para el efecto visual del login
const InicioSesion = ({ vuelta }) => {
  return (
    <View style={styles.login}>
      <Text style={styles.h2Login}>Nombre de usuario:</Text>
      <TextInput style={styles.inputsLogin} value={valorInicioSesionUsuario} />
      <Text style={styles.h2Login}>Contraseña:</Text>
      <TextInput style={styles.inputsLogin} secureTextEntry value={valorInicioSesionClave} />
      <Pressable style={styles.botonIniciarSesion} onPress={() => validar("inicioSesion", valorInicioSesionUsuario, valorInicioSesionClave)}>
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
      <TextInput style={styles.inputsLogin} value={valorRegistroUsuario} />
      <Text style={styles.h2Login}>Contraseña:</Text>
      <TextInput style={styles.inputsLogin} secureTextEntry value={valorRegistroClave} />
      <Text style={styles.h2Login}>Confirmar contraseña:</Text>
      <TextInput style={styles.inputsLogin} secureTextEntry value={valorRegistroClave2} />
      <Pressable style={styles.botonIniciarSesion}>
        <Text style={styles.textoIniciarSesion} onPress={() => validar("registro", valorRegistroUsuario, valorRegistroClave, valorRegistroClave2)}>Registrate</Text>
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

// Constante / Función que controla la animación (sacado de React Native Animated)
const FlipCard = ({
  isFlipped,
  direction = 'y',
  duration = 500,
  InicioSesion,
  Registrate,
}) => {
  const isDirectionX = direction === 'x';

  const inicioSesionAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 90]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
      opacity: isFlipped.value ? 0 : 1,
      pointerEvents: isFlipped.value ? 'none' : 'auto',
    };
  });

  const RegistrateAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [270, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
      opacity: isFlipped.value ? 1 : 0,
      pointerEvents: isFlipped.value ? 'auto' : 'none',
    };
  });

  // Pintar los bloques con los estilos
  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          inicioSesionAnimatedStyle,
        ]}>
        {InicioSesion}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          RegistrateAnimatedStyle,
        ]}>
        {Registrate}
      </Animated.View>
    </View>
  );
};

// Componente del Login, 

export default function Login() {

  // Como definir una variable pero de React Native Animated
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