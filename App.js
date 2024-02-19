import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import Box from "./components/Box";
import PokemonData from "./data.json";
import GroupedData from "./grouped.json";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={PokemonData}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
        ListEmptyComponent={<Text>No Items found</Text>}
        ListHeaderComponent={
          <Text
            style={{ fontSize: 24, paddingBottom: 10, textAlign: "center" }}
          >
            Pokemon Data
          </Text>
        }
        ListFooterComponent={
          <Text
            style={{ fontSize: 24, paddingBottom: 10, textAlign: "center" }}
          >
            End of List
          </Text>
        }
      /> */}
      <SectionList
        sections={GroupedData}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {section.type}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    flex: 1,
    // rowGap: 40.99,
    // columnGap: 38,
  },
});
