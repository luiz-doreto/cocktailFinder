import React, { useState, useMemo } from 'react';
import { Platform, TouchableOpacity, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    InputContainer,
    IconContainer,
    Input,
    Button,
    ButtonText,
} from './styles';
import { fetchCocktailsRequest } from '../../store/modules/list/actions';

export default function SearchBar({ onBack }) {
    const [searchParam, setSearchParam] = useState('');
    const dispatch = useDispatch();

    const renderBack = useMemo(() => searchParam.length === 0, [searchParam]);

    function handleChandle(value) {
        setSearchParam(value);
        dispatch(fetchCocktailsRequest({ searchParam: value }));
    }

    function handleCancel() {
        handleChandle('');
        Keyboard.dismiss();
    }

    return (
        <Container>
            {renderBack && (
                <TouchableOpacity onPress={onBack}>
                    {Platform.select({
                        ios: (
                            <Icon name="chevron-left" size={50} color="#fff" />
                        ),
                        android: (
                            <Icon name="arrow-back" size={30} color="#fff" />
                        ),
                    })}
                </TouchableOpacity>
            )}
            <InputContainer>
                <IconContainer>
                    <Icon name="search" size={25} color="#e3e3e3" />
                </IconContainer>
                <Input
                    placeholder="Search..."
                    value={searchParam}
                    autoCorrect={false}
                    autoCompleteType="off"
                    onChangeText={handleChandle}
                />
            </InputContainer>
            {!renderBack && (
                <Button onPress={handleCancel}>
                    <ButtonText>Cancel</ButtonText>
                </Button>
            )}
        </Container>
    );
}

SearchBar.propTypes = {
    onBack: PropTypes.func,
};

SearchBar.defaultProps = {
    onBack: undefined,
};
