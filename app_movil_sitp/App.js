// mobile/App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error al conectar: ' + error.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});