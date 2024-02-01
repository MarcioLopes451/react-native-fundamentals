import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);

  const addTask = () => {
    if (todo.trim() !== "") {
      task.push(todo);
      setTodo("");
    }
  };
  return (
    <View style={styles.container}>
      <Text>Todo List on React-Native</Text>
      <View>
        <TextInput value={todo} onChangeText={setTodo} style={styles.input} />
        <Button title="Add" color="blue" onPress={addTask} />
      </View>
      <View>
        <Text style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {task.map((tasks, id) => (
            <Text key={id}>
              <Text>{tasks}</Text>
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: "white",
    color: "white",
  },
});
