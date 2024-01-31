import {
  View,
  StatusBar,
  ActivityIndicator,
  Alert,
  Button,
} from "react-native";
import logo from "./assets/adaptive-icon.png";
import React, { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="default" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("invaild data", "incorrect dob", [
            {
              text: "cancel",
              onPress: () => console.log("cancel pressed"),
            },
            {
              text: "ok",
              onPress: () => console.log("ok pressed"),
            },
          ])
        }
      />
    </View>
  );
}
{
  /* <ScrollView>
        <Pressable
          onPress={() => console.log("img pressed")}
          onLongPress={() => console.log("long press")}
          onPressOut={() => console.log("press out")}
        >
          <Image source={logo} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable
          onPress={() => console.log("text pressed")}
          onPressIn={() => console.log("press in")}
        >
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only
          </Text>
        </Pressable>
        <Button
          title="Press"
          onPress={() => console.log("button pressed")}
          color="white"
        />
      </ScrollView> <Button
        title="Press"
        onPress={() => setModal(true)}
        color="midnightblue"
      />
      <Modal
        visible={modal}
        onRequestClose={() => setModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button title="Close" color="blue" onPress={() => setModal(false)} />
        </View>
      </Modal>*/
}
