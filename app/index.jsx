import {  SafeAreaView } from "react-native";
import React from "react";
import { FlatList } from "react-native-web";
import { Text } from "react-native";

const Users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
 
];

const Index = () => {
  return (
    <SafeAreaView >
     <FlatList
        data={Users}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default Index;
