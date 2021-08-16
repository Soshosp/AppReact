import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloColecao from "./estiloColecao";

function Colecao({ navigation }) {
  const voltar = () => {
    navigation.navigate("Inicial");
  };

  return (
    <View style={estiloColecao.container}>
      <View style={estiloColecao.borda}>
        <Text style={estiloColecao.texto}>Sobre</Text>

        <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
          <Text style={estiloColecao.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Colecao;
