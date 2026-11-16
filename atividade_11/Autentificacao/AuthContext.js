import {
    createContext,
    useContext,
    useState,
} from 'react';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    // Simulação: aceita qualquer e-mail com a senha 123456
    function login(email, senha) {
        if (senha !== '123456') return false;
        setUsuario({ nome: email.split('@')[0], email });
        return true;
    }
    function logout() {
        setUsuario(null);
    }
    return (
        <AuthContext.Provider
            value={{
                usuario,
                logado: !!usuario,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    const contexto = useContext(AuthContext);
    if (!contexto) {
        throw new Error('useAuth fora do <AuthProvider>');
    }
    return contexto;
}