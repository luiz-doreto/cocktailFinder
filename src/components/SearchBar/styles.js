import styled from 'styled-components/native';

export const Container = styled.View`
    height: 70px;
    flex-direction: row;
    align-items: center;
`;

export const InputContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const IconContainer = styled.View`
    justify-content: center;
    padding: 0 5px;
    background: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding: 5px;
    font-size: 16px;
    height: 36px;
    background: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
    padding: 0 10px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;
