import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function App() {
  // Valor que controla la escala (1 = tamaño normal)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación de zoom: crece y luego vuelve
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,        // Crece al 150% del tamaño original
          duration: 1000,      // 1 segundo para crecer
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,          // Vuelve al tamaño normal
          duration: 1000,      // 1 segundo para encogerse
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.text,
          { transform: [{ scale: scaleAnim }] }, // Solo zoom, sin desplazamiento
        ]}
      >
        Hola Mundo
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});