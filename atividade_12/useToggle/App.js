import {
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';

import { useToggle } from './useToggle';

export default function Configuracoes() {
  const [notificacoes, alternarNotificacoes] =
    useToggle(true);

  const [modoAviao, alternarModoAviao] =
    useToggle();

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.texto}>
          Notificações: {notificacoes ? 'ON' : 'OFF'}
        </Text>

        <Switch
          value={notificacoes}
          onValueChange={alternarNotificacoes}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.texto}>
          Modo avião: {modoAviao ? 'ON' : 'OFF'}
        </Text>

        <Switch
          value={modoAviao}
          onValueChange={alternarModoAviao}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  texto: {
    fontSize: 18
  },
});