import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'

const RootLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: '#397a1ef1' },
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      <Drawer.Screen name="JarBai" options={{ title: 'JarBai', headerShown: true }} />
      <Drawer.Screen name="Tasks" options={{ title: 'Tasks', headerShown: true }} />
    </Drawer>
  )
}

export default RootLayout

const styles = StyleSheet.create({})