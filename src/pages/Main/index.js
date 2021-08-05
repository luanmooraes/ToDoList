import React, {useState} from 'react';
import { FlatList } from 'react-native';

import { Container, InputContainer, Input, AddButton, 
AddButtonText, ListItem, ButtonListItem, ItemsContainer, ButtonDelete, TextButtonDelete } from './styles';

import useMarketList from '../../hooks/useMarketList';

const Main = () => {
    const [products, setProducts] = useState('');
    const [state, addItem, checkItem, removeItem] = useMarketList();
      
    return (
      <Container>
          <InputContainer>
            <Input 
                placeholder="Adicionar Produto"
                value={products}
                onChangeText={
                    text => {setProducts(text)}
                }
            />
            <AddButton 
                onPress={async() => {
                    addItem(products);
                    setProducts('');
                }}
            >
                <AddButtonText>+</AddButtonText>
            </AddButton>
          </InputContainer>

            <FlatList
                data={state}
                renderItem={({item}) => 
                    <ItemsContainer>
                        <ButtonListItem
                            onPress={() => {
                                checkItem(item.id);   
                            }} 
                        
                        >
                            <ListItem style={{}}>{item.title}</ListItem>
                        </ButtonListItem>

                        <ButtonDelete
                            onPress={() => {
                                removeItem(item.id);
                            }}    
                        >
                            <TextButtonDelete>Remover</TextButtonDelete>
                        </ButtonDelete>
                    </ItemsContainer>
                }
            />

      </Container>
  );
};

export default Main;
