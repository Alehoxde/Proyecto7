import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    // Para emulador Android, usa 10.0.2.2 (localhost del host)
    const MI_IP = '10.0.2.2';  // <-- Esto es para que el emulador acceda a tu computadora
    fetch(`http://${MI_IP}:3000`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error: ' + error.message));
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