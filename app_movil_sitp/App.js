import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    // Cambia esta IP por la de TU computadora
    fetch('http://192.168.1.35:3000')  // 👈 Usa TU IP, no localhost
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta:', data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Error: ' + error.message);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});