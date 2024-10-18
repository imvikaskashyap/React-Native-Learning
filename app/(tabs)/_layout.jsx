import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
  <Tabs screenOptions={{ tabBarShowLabel: false,
  tabBarActiveTintColor: '#FFA001',
  tabBarInactiveTintColor: '#CDCDE0',
  tabBarStyle: {
    backgroundColor:"#161622",
        borderTopWidth:1,
        borderTopColor:"#232533",
        height:84
  }
   }}>
    <Tabs.Screen name="form" options={{ title: 'Form' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
  </Tabs>
  )
}

export default TabsLayout