import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
export default function App(){
  return(
  <View>
    <Text style={styles.titulo}>Título</Text>

  </View>

  )
}
const styles = StyleSheet.create({
titulo: { fontSize: 22, color: 'tomato' },
});