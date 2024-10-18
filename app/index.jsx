import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const Users = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Jim"},
]

const Index = () => {


  return (
    <View>
      <Text className="text-red-500 text-3xl mb-8">Map the data in React Native</Text>
    { Users.map((item)=><Text>{item.name}</Text>)}
    </View>
  );
};

export default Index;
