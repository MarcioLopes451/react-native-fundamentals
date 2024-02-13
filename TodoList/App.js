import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblue, styles.boxShadow]}>
        <Text>StyleSheet API</Text>
      </View>
      <View style={[styles.lightgreen, styles.box, styles.androidShadow]}>
        <Text>StyleSheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 250,
    height: 250,
    padding: 10,
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
