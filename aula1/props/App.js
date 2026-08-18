import { View, Text } from 'react-native';
function Saudacao({ nome }) {
  return <Text>Olá, {nome}!</Text>;
}

export default function App() {
  return (
    <View>
      <Saudacao nome="Ana" />
      <Saudacao nome="Beto" />

    </View>

  )
}
// Reutilizando com valores diferentes:

