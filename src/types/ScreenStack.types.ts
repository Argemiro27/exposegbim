import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { TarefaProps } from "../interfaces/Tarefa.interface"

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  HomeStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

// Tarefa Stack
export type TarefaStackParamList = {
  Home: undefined
  Tarefa: TarefaProps
  Agenda: {
    title: string
    image: ImageSourcePropType
    data?: string
    descricao?: string
  }
}

type TarefaScreenNavigationProp = StackNavigationProp<TarefaStackParamList>
export type TarefaTypes = {
  navigation: TarefaScreenNavigationProp
}