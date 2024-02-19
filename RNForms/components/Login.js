import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Button,
  Alert,
} from "react-native";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const emailCredentials = email.trim();
  const passwordCredentials = password.trim();
  var emailRegex = /\S+@\S+\.\S+/;

  const login = () => {
    let errors = {};

    if (!passwordCredentials) errors.password = "Password is required";
    if (!emailCredentials) errors.email = "Email is required";
    if (!emailRegex.test(emailCredentials)) errors.email = "Email is invalid";

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (login()) {
      setEmail("");
      setPassword("");
      setError({});
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Form</Text>
      <View>
        <Text>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        {error.email ? (
          <Text style={styles.incorrect}>{error.email}</Text>
        ) : null}
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error.password ? (
        <Text style={styles.incorrect}>{error.password}</Text>
      ) : null}
      <Button onPress={handleSubmit} title="login">
        Login
      </Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  incorrect: {
    color: "red",
    padding: 10,
  },
});
