// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Contador() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{contador}</Text>

//       <Button
//         title="+1"
//         onPress={() => setContador(contador + 1)}
//       />

//       <Button
//         title="-1"
//         onPress={() => setContador(contador - 1)}
//       />

//       <Button
//         title="Zerar"
//         onPress={() => setContador(0)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 15,
//   },

//   numero: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Cronometro() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>
//         {segundos}s
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   numero: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
// });

import React, { createContext, useState } from 'react';

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

  const alternarTema = () => {
    setModo(m =>
      m === 'claro' ? 'escuro' : 'claro'
    );
  };

  return (
    <TemaContext.Provider
      value={{
        modo,
        cores: cores[modo],
        alternarTema,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
}