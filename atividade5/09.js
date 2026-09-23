import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [visivel, setVisivel] = useState(false);

  function alternarTexto() {
    setVisivel(!visivel);
  }

  return (
    <View style={styles.container}>
      <Button title="Mostrar" onPress={alternarTexto} />

      {visivel && <Text style={styles.texto}>Texto oculto</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginTop: 20,
    fontSize: 20,
  },
});
