import React from 'react';

import { Container, InputContainer, Input, AddButton, AddButtonText } from './styles';



const Main = () => {
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
      </Container>
  );
};

export default Main;