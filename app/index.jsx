import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JarBai</Text>
      <Text style={styles.subtitle}>Welcome Master Christiane</Text>
      <Text style={styles.card}>Initialize startup sequence</Text>

        <Link href="/JarBai" style={styles.link}>Start JarBai</Link>
        <Link href="/Tasks" style={styles.link}>Start Tasks</Link>
    </View>
  )
}

export default Home

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
    }    
})
/*npx expo install react-native-gesture-handler react-native-reanimated
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
*/ 