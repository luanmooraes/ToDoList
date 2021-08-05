import styled from 'styled-components/native';
import colors from '../../styles/colors'

export const Container = styled.View`
    height: 100%;
    width: 100%;  
    background-color: ${colors.yellow};
`;

export const InputContainer = styled.View`
    flex-direction: row;
    margin: 10px;
`;

export const Input = styled.TextInput`
    font-size: 30px;
    width: 90%;
`;

export const AddButton = styled.TouchableOpacity`
    margin-right: 5px;
    align-items: center;
    align-self: center;
`;

export const AddButtonText = styled.Text`
    text-align: center;
    font-size: 60px;
    color: ${colors.red};
`;

export const ItemsContainer = styled.View`
    flex-direction: row;
`;

export const ButtonListItem = styled.TouchableOpacity`
    flex: 1;
`;

export const ListItem = styled.Text`
    font-size: 22px;
    padding: 10px;
    margin: 3px 7px;
    text-decoration-line: line-through;
`;

export const ButtonDelete = styled.TouchableOpacity`
    align-items: center;
    align-self: center;
    margin: 10px 10px 10px;
`;

export const TextButtonDelete = styled.Text`
    font-size: 12px;
    color: red;
`;