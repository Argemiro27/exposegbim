import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AgendaProps } from "../../interfaces/Agenda.interface";
import ButtonAction from "../ButtonAction";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../styles/colors";
import Button from "../Button";
import { Alert } from "react-native";

export default function Agenda({
  title,
  data,
  buttonEdit,
  buttonRemove,
  onPress,
  ...rest
}: AgendaProps) {
  const agendaRemoveAlert = () =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja excluir a agenda?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => {
            console.log("Ok Pressed");
            buttonRemove();
          },
        },
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {data && (
        <View style={styles.list}>
          <Text style={styles.text}>{data}</Text>
          <View style={styles.button}>
            <ButtonAction type="edit" onPress={buttonEdit} {...rest}>
              <FontAwesome name="edit" color={colors.purpleLight} />
            </ButtonAction>
            <ButtonAction type="remove" onPress={agendaRemoveAlert} {...rest}>
              <FontAwesome name="remove" color={colors.purpleLight} />
            </ButtonAction>
          </View>
        </View>
      )}
      {!data && <Button size="define" title="Cadastrar" onPress={onPress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    marginTop: 10,
  },
  list: {
    width: "100%",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    width: "50%",
    marginTop: 20,
  },
  button: {
    width: "50%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});