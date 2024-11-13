import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#303030",
  },

  // Login

    viewLogin: {
      alignItems: "center",
      marginTop: 150,
    },
    h1Login: {
      color: "red",
      fontSize: 40,
      marginBottom: 40,
      fontWeight: "700",
      letterSpacing: 2,
      fontStyle: "italic",
    },
    login: {
      width: 320,
      height: 'auto',
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "red",
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 20,
    },
    h2Login: {
      fontSize: 20,
      fontStyle: "italic",
      color: "red",
      fontWeight: "500",
      marginTop: 20,
    },
    inputsLogin: {
      borderBottomWidth: 1,
      borderBottomColor: "grey",
      paddingTop: 5,
      paddingLeft: 5,
      fontSize: 18,
      fontStyle: "italic",
    },
    botonIniciarSesion: {
      backgroundColor: "red",
      marginTop: 40,
      padding: 5,
      textAlign: "center",
      borderRadius: 3,
    },
    textoIniciarSesion: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      fontStyle: "italic",
      color: "white",
    },
    botonRegistrarse: {
      width: 200,
      backgroundColor: "white",
      padding: 5,
      textAlign: "center",
      borderRadius: 3,
      borderWidth: 1,
      borderColor: "red",
      marginBottom: 20,
    },
    textoRegistrarse: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "500",
      fontStyle: "italic",
      color: "red",
    },

  // Menú

    menu: {
      position: "absolute",
      width: "70%",
      height: "120%",
      backgroundColor: "#DDDDDD",
      zIndex: 10,
      paddingVertical: 40,
      paddingHorizontal: 10,
      flexDirection: "column",
    },
    cabeceraMenu: {
      flexDirection: "row",
    },
    cerrarMenu: {
      backgroundColor: "red",
      color: "000",
      borderRadius: 50,
    }
});

export { styles };