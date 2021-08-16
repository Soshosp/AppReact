import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function BoasVindas(props) {

  const[mensagem, setMensagem] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textos}>{props.caixadetexto}</Text>
      <Text style={styles.textos}>{mensagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b53d35',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    textos: {
        fontFamily: "Calibri",
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});
export default BoasVindas;