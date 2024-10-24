import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

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
  },
  login: {
    width: 200,
    height: 400,
    backgroundColor: "red",
  }
});

export { Background, styles };