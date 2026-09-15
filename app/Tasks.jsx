import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Tasks = () => {
    const handlePress = () => {
        console.log('Tasks initialized')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>
      <Text style={styles.subtitle}>Good day, Master Christiane</Text>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
    <Link href="/JarBai">Load JarBai</Link>
      </Pressable>
      <Link href="/" style={styles.link}>Return to Home</Link>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#397a1ef1',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
     subtitle: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
        marginVertical: 30,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
     link: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
    },
    btn: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    },
    pressed: {
        opacity: 0.75,
    },           
})