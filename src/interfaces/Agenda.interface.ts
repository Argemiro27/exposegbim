import { ImageSourcePropType } from "react-native";
import { ButtonProps } from "./Button.interface"

export interface AgendaProps extends ButtonProps {
  data?: string
  buttonEdit: () => void
  buttonRemove: () => void
}

export interface AgendaPropsTarefa {
  title: string
  image: ImageSourcePropType
  data?: string
  descricao?: string
}