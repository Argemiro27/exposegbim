  
import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Header, Button, ButtonText } from "../../components";
import data from "../../services/data";
import {useNavigation} from '@react-navigation/core'

export default function Home() {
  const navigation = useNavigation()
  function handleLogin(){
    navigation.navigate("Login")
  }
  function handleContato(){
    navigation.navigate("Contato")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Title>MEU PERFIL</Title>
      <Header
        hello="Olá"
        name="Argemiro"
        image={require("../../../assets/img/argemiro.png")}
      />
      <Text style={styles.message}>Agende já suas tarefas, clicando em Minha Agenda</Text>
      <View>
      <Button title="MINHA AGENDA" onPress={handleAgenda} />
      <Button title="SOBRE" onPress={handleSobre} />
      <Button title="CONTATO" onPress={handleContato} />
      <ButtonText title="LOGOUT" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 110,
      marginTop: 10,
    },
    message: {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 20,
    },
  });