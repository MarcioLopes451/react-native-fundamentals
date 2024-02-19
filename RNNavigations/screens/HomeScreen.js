import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="go to about"
        onPress={() =>
          navigation.navigate("about", {
            name: "Marcio",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
