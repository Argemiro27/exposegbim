import * as React from "react"
import { useFonts, NovaFlat_400Regular } from '@expo-google-fonts/nova-flat';
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login"
import {Button,ButtonText, Header} from "../../components"
import {useNavigation} from '@react-navigation/core'

export default function Login(){
    let [fontsLoaded] = useFonts({
        NovaFlat_400Regular,
    });

    const navigation = useNavigation()
    function handleCadastrar(){
        navigation.navigate("Cadastrar")
    }
    function handleHome(){
        navigation.navigate("Home")
    }
    return(
        <>
            {fontsLoaded &&(
            <Container>
                <Header
                    image2={require("../../assets/cabecalho1.png")}
                    image={require("../../assets/logo1.png")}
                />
                <Form>  
                    <Title>LOGIN</Title>
                    <FormRow>
                        <TextInput placeholder="Email"></TextInput>
                    </FormRow>
                    <FormRow>
                    <TextInput placeholder="Senha"></TextInput>
                    </FormRow>
                    <Button title="Entrar" onPress={handleHome} />
                    <ButtonText title="CADASTRAR-SE" onPress={handleCadastrar} />
                </Form>
            </Container>
            )}
        </>
    );
}