import { ImageSourcePropType } from 'react-native'

export interface TarefaProps {
    agenda: any;
    image: ImageSourcePropType;
    title: any;
    Home: undefined
    Tarefa: TarefaProps
    Agenda: {
      title: string
      image: ImageSourcePropType
      data?: string
      descricao?: string
    }
  }