import { View } from 'react-native';
import { Image } from 'react-native';
// Imagem da internet
export default function App() {
  return (
    <View>
      <Image
        source={{ uri: 'https://site.com/foto.png' }}
        style={{ width: 100, height: 100 }}
      />
// Imagem local
      <Image source={require('./logo.png')} />

    </View>


  );
}