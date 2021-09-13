import * as React from "react"
import { Container, Title } from "../../styles/Login"
import {ButtonText, Header} from "../../components"
import {useNavigation} from '@react-navigation/core'

export default function Sobre(){
    const navigation = useNavigation()
    function handleHome(){
        navigation.navigate("Home")
    }
    return(
        <>
            <Container>
                <Header
                    image2={require("../../assets/cabecalho1.png")}
                    image={require("../../assets/logo1.png")}
                />
            <Title>SOBRE</Title>
            <p>O Schedz é um aplicativo que objetiva auxiliar os seus usuários a organizar melhor suas tarefas, criando uma agenda.</p>
            <ButtonText title="Voltar" onPress={handleHome} />
            </Container>
        </>
    );
}