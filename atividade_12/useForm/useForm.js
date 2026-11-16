import { useState } from 'react';
export function useForm(valoresIniciais, validar) {
const [valores, setValores] = useState(
valoresIniciais,
);
const [erros, setErros] = useState({});
function alterar(campo, valor) {
setValores(ant => ({ ...ant, [campo]: valor }));
}
function enviar(aoEnviar) {
const novosErros = validar(valores);
setErros(novosErros);
if (Object.keys(novosErros).length === 0) {
aoEnviar(valores);
}
}
function limpar() {
setValores(valoresIniciais);
setErros({});
}
return { valores, erros, alterar, enviar, limpar };
}