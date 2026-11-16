import { createContext, useState } from 'react';
export const TemaContext = createContext();
const cores = {
claro: {
fundo: '#FFFFFF',
texto: '#111111',
primaria: '#6200EE',
},
escuro: {
fundo: '#121212',
texto: '#EEEEEE',
primaria: '#BB86FC',
},
};
export function TemaProvider({ children }) {
const [modo, setModo] = useState('claro');
function alternarTema() {
setModo(m => (m === 'claro' ? 'escuro' : 'claro'));
}
return (
<TemaContext.Provider
value={{ modo, cores: cores[modo], alternarTema }}
>
{children}
</TemaContext.Provider>
);
}