import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblue]}>
        <Text>StyleSheet API</Text>
      </View>
      <View style={[styles.lightgreen, styles.box]}>
        <Text>StyleSheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
});
