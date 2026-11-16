import { useState } from 'react';
import {
View,
Text,
TextInput,
Button,
StyleSheet,
} from 'react-native';
import {
AuthProvider,
useAuth,
} from './contexts/AuthContext';
function Login() {
const { login } = useAuth();
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [erro, setErro] = useState('');
function entrar() {
const ok = login(email, senha);
if (!ok) setErro('Senha incorreta (dica: 123456)');
}
return (
<View style={styles.container}>
<Text style={styles.titulo}>Login</Text>
<TextInput
style={styles.campo}
placeholder="E-mail"
autoCapitalize="none"
value={email}
onChangeText={setEmail}
/>
<TextInput
style={styles.campo}
placeholder="Senha"
secureTextEntry
value={senha}
onChangeText={setSenha}
/>
{erro ? (
<Text style={styles.erro}>{erro}</Text>
) : null}
<Button title="Entrar" onPress={entrar} />
</View>
);
}
function Home() {
const { usuario, logout } = useAuth();
return (
<View style={styles.container}>
<Text style={styles.titulo}>
Bem-vindo, {usuario.nome}!
</Text>
<Button title="Sair" onPress={logout} />
</View>
);
}
function Rotas() {
const { logado } = useAuth();
return logado ? <Home /> : <Login />;
}
export default function App() {
return (
<AuthProvider>
<Rotas />
</AuthProvider>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 20,
gap: 12,
},
titulo: { fontSize: 28, textAlign: 'center' },
campo: {
borderWidth: 1,
borderColor: '#999',
borderRadius: 8,
padding: 10,
},
erro: { color: 'red' },
});