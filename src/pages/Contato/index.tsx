import * as React from "react"
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login"
import {Button,ButtonText, Header} from "../../components"
import {useNavigation} from '@react-navigation/core'

export default function Contato(){
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
                <Form>  
                    <Title>CONTATO</Title>
                    <FormRow>
                        <TextInput placeholder="Email"></TextInput>
                    </FormRow>
                    <FormRow>
                        <TextInput placeholder="Mensagem"></TextInput>
                    </FormRow>
                    <Button title="Enviar" onPress={handleHome} />
                    <ButtonText title="VOLTAR" onPress={handleHome} />
                </Form>
            </Container>
        </>
    );
}