import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    // 🔴 CAMBIA ESTA IP por la IP real de tu computadora
    // (ejecuta 'ipconfig' en Windows y busca "IPv4")
    const MI_IP = '192.168.1.35'; // <--- Pon aquí tu IP
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