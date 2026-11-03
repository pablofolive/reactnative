// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator
// } from 'react-native';

// export default function ListaUsuarios() {

//   const [usuarios, setUsuarios] = useState([]);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   useEffect(() => {

//     async function carregar() {
//       try {
//         const resposta = await fetch(
//           'https://jsonplaceholder.typicode.com/users'
//         );

//         const dados = await resposta.json();

//         setUsuarios(dados);

//       } catch (error) {
//         setErro('Erro ao carregar usuários');
//       } finally {
//         setCarregando(false);
//       }
//     }

//     carregar();

//   }, []);

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (erro) {
//     return <Text>{erro}</Text>;
//   }

//   return (
//     <View style={{ flex: 1, padding: 20 }}>

//       <FlatList
//         data={usuarios}
//         keyExtractor={item => String(item.id)}
//         renderItem={({ item }) => (
//           <Text style={{ fontSize: 18, marginBottom: 10 }}>
//             {item.name}
//           </Text>
//         )}
//       />

//     </View>
//   );
// }

// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   Button,
//   ActivityIndicator
// } from 'react-native';

// export default function DetalhePost() {

//   const [postId, setPostId] = useState(1);
//   const [post, setPost] = useState(null);
//   const [carregando, setCarregando] = useState(true);

//   useEffect(() => {

//     async function carregarPost() {

//       setCarregando(true);
//       setPost(null);

//       try {
//         const resposta = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${postId}`
//         );

//         const dados = await resposta.json();

//         setPost(dados);

//       } catch (error) {
//         setPost(null);
//       } finally {
//         setCarregando(false);
//       }

//     }

//     carregarPost();

//   }, [postId]);

//   return (
//     <View style={{ flex: 1, padding: 20 }}>

//       <Button
//         title="Post anterior"
//         onPress={() => setPostId(id => Math.max(1, id - 1))}
//       />

//       <Button
//         title="Próximo post"
//         onPress={() => setPostId(id => id + 1)}
//       />

//       {carregando ? (
//         <ActivityIndicator size="large" />
//       ) : post ? (
//         <View style={{ marginTop: 20 }}>
//           <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
//             {post.title}
//           </Text>

//           <Text style={{ marginTop: 10 }}>
//             {post.body}
//           </Text>
//         </View>
//       ) : (
//         <Text>Erro ao carregar o post.</Text>
//       )}

//     </View>
//   );
// }


// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';

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
//     alignItems: 'center'
//   },

//   numero: {
//     fontSize: 40,
//     fontWeight: 'bold'
//   }

// });

import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';

export default function BuscaProdutos() {

  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {

    if (termo.length < 3) {
      setResultados([]);
      setCarregando(false);
      return;
    }

    setCarregando(true);

    const timer = setTimeout(async () => {

      try {
        const resposta = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(termo)}`
        );

        const dados = await resposta.json();

        setResultados(dados.products);

      } catch (error) {
        setResultados([]);
      } finally {
        setCarregando(false);
      }

    }, 500);

    return () => clearTimeout(timer);

  }, [termo]);

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <TextInput
        placeholder="Buscar produtos..."
        value={termo}
        onChangeText={setTermo}
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 10,
          marginBottom: 20
        }}
      />

      {carregando ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={resultados}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 16, marginBottom: 12 }}>
              {item.title}
            </Text>
          )}
          ListEmptyComponent={
            <Text>Nenhum produto encontrado.</Text>
          }
        />
      )}

    </View>
  );
}