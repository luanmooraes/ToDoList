import styled from 'styled-components/native';
import colors from '../../styles/colors'

export const Container = styled.View`
    height: 100%;
    width: 100%;  
     
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

export const ListItem = styled.Text`
    background-color: gray;
    font-size: 22px;
    padding: 10px;
    margin: 3px 7px;
`;