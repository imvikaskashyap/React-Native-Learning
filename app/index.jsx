import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import React, { useState } from "react";

const Users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jimmy" },
  { id: 5, name: "Jimola" },
];

const Index = () => {
  return (
    <View>
      <Text className="text-red-500 text-3xl mb-8 ">
        Map the data in React Native
      </Text>
      <ScrollView>
        <View className="flex flex-row w-full flex-wrap">
      {Users.map((item) => (
          <Text className="  w-20 h-20 p-4 m-4 border-2 border-black bg-orange-400">
            {item.name}
          </Text>
      ))}
        </View>
        </ScrollView>
    </View>
  );
};

export default Index;
