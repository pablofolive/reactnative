import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ titulo, corFundo = '#f0f0f0' }) {
  return (
    <View style={[styles.card, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 8,
    margin: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
