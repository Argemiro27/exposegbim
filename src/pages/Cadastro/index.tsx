import * as React from "react"
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login"
import {Button,ButtonText} from "../../components"
import {useNavigation} from '@react-navigation/core'

export default function Cadastrar(){
    const navigation = useNavigation()
    function handleLogin(){
        navigation.navigate("Login")
    }
    return(
        <Container>
            <Form>
                <Title>CADASTRO</Title>
                <FormRow>
                    <TextInput placeholder="Email"></TextInput>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="Usuário"></TextInput>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="Senha"></TextInput>
                </FormRow>
                <Button title="Cadastrar" onPress={handleLogin} />
                <ButtonText title="Voltar" onPress={handleLogin} />
            </Form>
        </Container>
    );
}