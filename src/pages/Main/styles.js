import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Button = styled(RectButton)`
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
    height: 60px;
    background: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

export const ButtonContent = styled.View``;

export const ButtonText = styled.Text`
    font-size: 16px;
`;

export const LogoTitle = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

export const LogoTitleMain = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const LogoTitleSecondary = styled.Text`
    font-size: 25px;
    font-weight: 300;
    color: #fff;
`;
