import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { useFetch } from './hooks/useFetch';
function Posts() {
    const { dados, carregando, erro } =
        useFetch('/posts');
    if (carregando) return <ActivityIndicator />;
    if (erro) return <Text>{erro}</Text>;
    return (
        <Text style={styles.texto}>
            {dados.length} posts carregados
        </Text>
    );
}
function Usuarios() {
    const { dados, carregando, erro } =
        useFetch('/usuarios');
    if (carregando) return <ActivityIndicator />;
    if (erro) return <Text>{erro}</Text>;
    return dados.map(u => (
        <Text key={u.id} style={styles.texto}>
            {u.nome}
        </Text>
    ));
}
function Inexistente() {
    const { carregando, erro } = useFetch('/nada');
    if (carregando) return <ActivityIndicator />;
    return <Text style={styles.erro}>{erro}</Text>;
}
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Posts</Text>
            <Posts />
            <Text style={styles.titulo}>Usuários</Text>
            <Usuarios />
            <Text style={styles.titulo}>Endereço errado</Text>
            <Inexistente />
        </View>
    );
}
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
paddingTop: 60,
gap: 4,
},
titulo: {
fontSize: 22,
fontWeight: 'bold',
marginTop: 12,
},
texto: { fontSize: 18 },
erro: { fontSize: 18, color: 'red' },
});