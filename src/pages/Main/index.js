import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    Img,
    Button,
    ButtonContent,
    ButtonText,
    LogoTitle,
    LogoTitleMain,
    LogoTitleSecondary,
} from './styles';
import logo from '../../../assets/cocktail.png';

export default function Main() {
    return (
        <Container
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            locations={[0, 1.0]}
            colors={['#b40792', '#ff4000']}
        >
            <Img source={logo} />
            <LogoTitle>
                <LogoTitleMain>Cocktail</LogoTitleMain>
                <LogoTitleSecondary>Finder</LogoTitleSecondary>
            </LogoTitle>
            <Button>
                <ButtonContent>
                    <ButtonText>Search your favorite cocktail</ButtonText>
                </ButtonContent>
            </Button>
        </Container>
    );
}
