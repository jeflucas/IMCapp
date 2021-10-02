import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: "Indeterminado",
    cor: "#bdc3c7",
  };

  calcularIMC = () => {
    const resultado = this.state.peso / this.state.altura ** 2;

    this.setState({
      imc: resultado.toFixed(2),
    });

    if (resultado < 18.5) {
      this.setState({
        legenda: "Magreza",
        cor: "#e74c3c",
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: "Normal",
        cor: "#2ecc71",
      });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: "Sobrepeso",
        cor: "#f1c40f",
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: "Obesidade",
        cor: "#e67e22",
      });
    } else {
      this.setState({
        legenda: "Obesidade Severa",
        cor: "#e74c3c",
      });
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View style={[styles.painel, { backgroundColor: this.state.cor }]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
        <View>
          <TextInput
            label="Peso"
            keyboardType="number-pad"
            style={styles.peso}
            onChangeText={(valor) => {
              this.setState({
                peso: valor.replace(",", "."),
              });
            }}
          />
          <TextInput
            label="Altura"
            keyboardType="number-pad"
            style={styles.altura}
            onChangeText={(valor) => {
              this.setState({
                altura: valor.replace(",", "."),
              });
            }}
          />
          <Button mode="contained" onPress={this.calcularIMC}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
    fontFamily: "consolas",
    aligncontent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  painel: {
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 10,
    padding: 8,
    width: 150,
  },
  legenda: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  resultado: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  diagnostico: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  peso: {
    marginBottom: 10,
    borderWidth: 1,
  },
  altura: {
    marginBottom: 10,
    borderWidth: 1,
  },
});
