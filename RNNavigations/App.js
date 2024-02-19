import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Pressable onPress={() => alert("menu button pressed")}>
                <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "darkred",
            },
          }}
        />
        <Stack.Screen
          name="about"
          component={AboutScreen}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
