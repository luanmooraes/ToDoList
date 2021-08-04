import React from 'react';
import { FlatList, Text } from 'react-native';

import { Container, InputContainer, Input, AddButton, AddButtonText, ListItem } from './styles';

const Main = () => {
    const data = [
        {id:'1', title: 'Arroz', check: false},
        {id:'2', title: 'Feijão', check: false},
    ]

    return (
      <Container>
          <InputContainer>
            <Input 
                placeholder="Adicionar Produto"
            />
            <AddButton>
                <AddButtonText>+</AddButtonText>
            </AddButton>

          </InputContainer>
            <FlatList
                data={data}
                renderItem={({item}) => 
                    <ListItem>{item.title}</ListItem>
                }
            />
      </Container>
  );
};

export default Main;