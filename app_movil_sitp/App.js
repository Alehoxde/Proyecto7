import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
   fetch('http://192.168.1.87:3000')  // Reemplaza con tu IP real  // Para emulador Android
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});