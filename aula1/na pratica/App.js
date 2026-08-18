import { View, Text,Image } from 'react-native';
export default function App() {
return (
<View style={styles.box}>
<Text>Texto no app</Text>
<Image source={logo} />
</View>
);
}