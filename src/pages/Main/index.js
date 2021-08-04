import React, {useReducer, useState} from 'react';
import { FlatList } from 'react-native';
import {sha256} from 'react-native-sha256';

import { Container, InputContainer, Input, AddButton, AddButtonText, ListItem } from './styles';

const Main = () => {
    // O estado inicial recebe um array vazio
    const inicialState = []
    
    // È criada uma funçao reducer que recebe como parametros padroes 
    // o state e a action. A logica da funcao funciona da seguinte forma:
    // Eu tenho um switch com uma expressao action.type com algumas instruçoes 
    // para serem executadas a partir do case escolhido. No caso desse exemplo foi
    // disparado o case ADD quando foi pressionado o botao de Adicionar. 

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return [...state, action.item]
                
            default:
                return state;
        }
    }
    
    const [item, setItem] = useState('');
    const [state, dispatch] = useReducer(reducer, inicialState);
    
    return (
      <Container>
          <InputContainer>
            <Input 
                placeholder="Adicionar Produto"
                value={item}
                onChangeText={
                    text => {setItem(text)}
                }
            />
            <AddButton 
                onPress={async() => {
                    const hashId = await sha256(item);
                    dispatch({
                        type: 'ADD',
                        item: {
                            id: hashId,
                            title: item,
                            check: false
                        }
                    })
                    setItem('')
                }}
            >
                <AddButtonText>+</AddButtonText>
            </AddButton>

          </InputContainer>
            <FlatList
                data={state}
                renderItem={({item}) => 
                    <ListItem>{item.title}</ListItem>
                }
            />
      </Container>
  );
};

export default Main;