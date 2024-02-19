import { View, Text, StyleSheet, Button } from "react-native";
import React, { useLayoutEffect } from "react";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text style={styles.text}>{name}</Text>
      <Button
        title="update name"
        onPress={() =>
          navigation.setParams({
            name: "real men",
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
