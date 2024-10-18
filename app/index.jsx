import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const Index = () => {
const [display, setDisplay] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Alert.alert(name, email, password);
    setDisplay(true)
  };

  return (
    <View>
      <Text className="text-red-500 text-3xl mb-8">Form in React Native</Text>
      <TextInput
      value={name}
        className="text-xl border-2 border-blue-500 p-3"
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
       value={email}
        className="text-xl border-2 border-blue-500 p-3 mt-4"
        placeholder="Enter your Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
       value={password}
        className="text-xl border-2 border-blue-500 p-3 mt-4 mb-4"
        placeholder="Enter your Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        onPress={handleSubmit}
        className=" mt-4"
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {
        display? 
        <View>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{password}</Text>

        </View> : null
      }
    </View>
  );
};

export default Index;
