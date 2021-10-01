import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
  const imc = 23;

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      <View>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>Normal</Text>
      </View>
      <View>
        <TextInput style={styles.peso} />
        <TextInput style={styles.altura} />
        <Button>Calcular</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    fontFamily: "consolas",
  },
  legenda: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  resultado: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  diagnostico: {
    textAlign: "center",
    fontSize: 16,
  },
  peso: {
    borderColor: "#000",
    borderWidth: 1,
  },
  altura: {
    borderColor: "#000",
    borderWidth: 1,
  },
});
