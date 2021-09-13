import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import colors from "../../styles/colors";
import { TarefaTypes } from "../../types/ScreenStack.types";
import { TarefaProps } from "../../interfaces/Tarefa.interface";

export default function Agenda({ navigation }: TarefaTypes) {
  const route = useRoute();
  const data = route.params as TarefaProps;
  console.log({ ...data });
  const [dataAgenda, setDataAgenda] = useState(data.agenda);
  function dataChange(item: string) {
    setDataAgenda(item);
  }
  // const navigation = useNavigation();
  function handleTarefa() {
    navigation.navigate("Tarefa", { ...data });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name={data.title} image={data.image} />
      <Text style={styles.text}>Agenda</Text>
      <TextInput
        style={styles.input}
        placeholder="dia/mês/ano"
        value={dataAgenda}
        onChangeText={(text) => dataChange(text)}
      />
      <Button size="define" title="Salvar" onPress={handleTarefa} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.black,
    fontSize: 16,
    padding: 10,
    width: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
});