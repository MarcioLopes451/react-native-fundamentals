import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box children={"box 1"} style={{ backgroundColor: "red" }} />
      <Box children={"box 2"} style={{ backgroundColor: "blue" }} />
      <Box children={"box 3"} style={{ backgroundColor: "green" }} />
      <Box
        children={"box 4"}
        style={{ backgroundColor: "pink", alignSelf: "flex-start" }}
      />
      <Box children={"box 5"} style={{ backgroundColor: "black" }} />
      <Box children={"box 6"} style={{ backgroundColor: "yellow" }} />
      <Box children={"box 7"} style={{ backgroundColor: "orange" }} />
      <Box children={"box 8"} style={{ backgroundColor: "purple" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",

    flex: 1,
    // rowGap: 40.99,
    // columnGap: 38,
  },
});
