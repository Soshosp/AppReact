import React from "react";
import { Text, View, TouchableOpacity, styles } from "react-native";
import estiloColecao from "./estiloColecao";
import BoasVindas from "../text";

function Colecao({ navigation }) {
  const voltar = () => {
    navigation.navigate("Inicial");
  };

  return (
    <View style={estiloColecao.container}>
      <View style={estiloColecao.borda}>
        <Text style={estiloColecao.texto}>S.O.S HOSP</Text>
        <Text style={estiloColecao.texto}>O App tem como iniciativa facilitar em sua procura por um hospital, proporcionando ao paciente informações que o levam a concluir qual será o hospital com um atendimento mais rápido, para que o mesmo não passe muito tempo em filas ou tenha o constrangimento de não ser atendido.</Text>
      </View>
        <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
          <Text style={estiloColecao.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
    </View>
  
  );

}



export default Colecao;
