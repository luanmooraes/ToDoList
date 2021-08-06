// Criação do Hook useMarketList
import {useReducer} from 'react';

import {sha256} from 'react-native-sha256';

// O estado inicial recebe um array vazio
const inicialState = []; // state = os elementos
    // È criada uma funçao reducer que recebe como parametros padroes 
    // o state e a action. A logica da funcao funciona da seguinte forma:
    // Eu tenho um switch com uma expressao action.type com algumas instruçoes 
    // para serem executadas a partir do case escolhido. No caso desse exemplo foi
    // disparado o case ADD quando foi pressionado o botao d Adicionar. 
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];

        case 'CHECK':
            return state.map(item => {
                if (item.id === action.id) {
                    return {...item, check: !item.check}
                }else{
                    return item;
                }
            })

        case 'REMOVE':
            return state.filter(item => {
                return item.id !== action.id;  //retorna so 'item.id' que sao diferentes de 'action.id'
            })  

        default:
            return state;
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const addItem = async title => {
        const hashId = await sha256(title);
        dispatch({
            type: 'ADD',
            item: {
                id: hashId,
                title: title,
                check: false
            }
        })
    };

    const checkItem = (id) => {
        dispatch({
            type: 'CHECK',
            id: id,
        })
    };

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE',
            id: id,
        })
    };

    return [state, addItem, checkItem, removeItem];
}

