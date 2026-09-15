import { Button, TouchableOpacity, Text }
from 'react-native';

export default function App(){
<Button title="Clique" onPress={() => alert('Oi!')} />
  return(
<TouchableOpacity onPress={() => alert('Toque!')}>
<Text>Botão personalizado</Text>
</TouchableOpacity>

  )
}
