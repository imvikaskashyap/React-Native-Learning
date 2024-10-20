import React from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';

const Users = [
  { id: '1', name: 'John', age: 28 },
  { id: '2', name: 'Jane', age: 25 },
  { id: '3', name: 'Jim', age: 32 },
  { id: '4', name: 'Jimmy', age: 29 },
  { id: '5', name: 'Jimola', age: 30 },
];

const UserItem = ({ name, age }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.ageText}>Age: {age}</Text>
    </View>
  );
};

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Users}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <UserItem name={item.name} age={item.age} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ageText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Index;
