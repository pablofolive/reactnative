import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <View style={s.card}>
      <Text style={s.texto}>Oi</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: '#61dafb',
    padding: 16,
    borderRadius: 8,
  },
  texto: {
    fontSize: 14,
  },
});
