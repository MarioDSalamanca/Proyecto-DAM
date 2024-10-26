import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  ViewLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303030",
  },
  login: {
    width: 270,
    height: 400,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
  }
});

export { styles };