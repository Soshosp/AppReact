import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BoasVindas from './components/BoasVindas';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <BoasVindas caixadetexto="S.O.S HOSP"/>
        <BoasVindas caixadetexto="Sobre Nós"/>
        <BoasVindas caixadetexto="O App tem como iniciativa facilitar em sua procura por um hospital, proporcionando ao paciente informações que o levam a concluir qual será o hospital com um atendimento mais rápido, para que o mesmo não passe muito tempo em filas ou tenha o constrangimento de não ser atendido."/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed"
  },
  segundo: {

  }
});