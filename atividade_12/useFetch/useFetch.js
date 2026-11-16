import { useState, useEffect } from 'react';
import { fakeFetch } from '../fakeApi';
export function useFetch(url) {
const [dados, setDados] = useState(null);
const [carregando, setCarregando] = useState(true);
const [erro, setErro] = useState(null);
useEffect(() => {
let cancelado = false;
async function carregar() {
setCarregando(true);
setErro(null);
try {
const resposta = await fakeFetch(url);
if (!resposta.ok)
throw new Error(`Erro ${resposta.status}`);
const json = await resposta.json();
if (!cancelado) setDados(json);
} catch (e) {
if (!cancelado) setErro(e.message);
} finally {
if (!cancelado) setCarregando(false);
}
}
carregar();
return () => {
cancelado = true;
};
}, [url]);
return { dados, carregando, erro };
}