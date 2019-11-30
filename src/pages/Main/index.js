import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import logo from '../../../assets/cocktail.png';
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

export default function Main({ navigation }) {
    function handlePress() {
        navigation.navigate('List');
    }

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
            <Button onPress={handlePress}>
                <ButtonContent>
                    <Icon name="search" color="#ff4000" size={30} />
                    <ButtonText>Search your favorite cocktail</ButtonText>
                </ButtonContent>
            </Button>
        </Container>
    );
}

Main.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
