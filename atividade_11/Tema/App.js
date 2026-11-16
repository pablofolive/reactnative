import { useContext } from 'react';
import {
View,
Text,
Button,
StyleSheet,
} from 'react-native';
import {
TemaContext,
TemaProvider,
} from './contexts/TemaContext';
function Home() {
const { modo, cores, alternarTema } =
useContext(TemaContext);
return (
<View
style={[
styles.container,
{ backgroundColor: cores.fundo },
]}
>
<Text
style={[styles.titulo, { color: cores.texto }]}
>
Tema atual: {modo}
</Text>
<Button
title="Trocar tema"
color={cores.primaria}
onPress={alternarTema}
/>
</View>
);
}
export default function App() {
return (
<TemaProvider>
<Home />
</TemaProvider>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
gap: 16,
},
titulo: { fontSize: 24 },
});