import React from "react";
import { useRoute } from "@react-navigation/core";
import { SafeAreaView } from "react-native";
import { Header, Agenda, ButtonText } from "../../components";
import { TarefaProps } from "../../interfaces/Tarefa.interface";
import { TarefaTypes } from "../../types/ScreenStack.types";

export default function Tarefa({ navigation }: TarefaTypes) {
  const route = useRoute();
  const data = route.params as TarefaProps;
  function handleAgendaTarefa() {
    navigation.navigate("Agenda", { ...data });
  }
  function agendaEdit() {
    navigation.navigate("Agenda", { ...data });
  }
  function agendaRemove() {
    console.log("Agenda", { ...data });
  }
  function voltar() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Header name={data.title} image={data.image} />
      <Agenda
        title="Agenda"
        onPress={handleAgendaTarefa}
        buttonEdit={agendaEdit}
        buttonRemove={agendaRemove}
        data={data.agenda}
      />
      <ButtonText title="Voltar" onPress={voltar} />
    </SafeAreaView>
  );
}