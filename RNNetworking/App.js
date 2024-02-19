import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      setPost(data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.error("error fetching data:", error);
      setLoading(false);
      setError("failed to fetch post list");
    }
  };
  const handleRefresh = () => {
    setRefresing(true);
    fetchData();
    setRefresing(false);
  };

  const addPost = async () => {
    setPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
          }),
        }
      );

      const newPost = await response.json();
      setPost([newPost, ...post]);
      setBody("");
      setTitle("");
      setPosting(false);
      setError("");
    } catch (error) {
      console.error("error adding post:", error);
      setPosting(true);
      setError("failed to add post to list");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? <Text>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="post title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="post body"
          value={body}
          onChangeText={setBody}
          style={styles.input}
        />
        <Button title={posting ? "Adding..." : "Add Post"} onPress={addPost} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={post}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListHeaderComponent={<Text style={styles.title}>Post List</Text>}
          ListFooterComponent={<Text style={styles.title}>End of List</Text>}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  body: {
    fontSize: 24,
    color: "grey",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
