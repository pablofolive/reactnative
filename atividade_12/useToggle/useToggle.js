import { useState } from 'react';

export function useToggle(valorInicial = false) {
  const [valor, setValor] = useState(valorInicial);
  const alternar = () => setValor(v => !v);

  return [valor, alternar];
}