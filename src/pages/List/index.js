import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
    Container,
    Content,
    ListContainer,
    Loading,
    DrinkList,
    DrinkItem,
    DrinkThumb,
    DrinkTitle,
} from './styles';
import SearchBar from '../../components/SearchBar';

export default function List({ navigation }) {
    const loading = useSelector(state => state.list.loading);
    const cocktails = useSelector(state => state.list.cocktails);

    return (
        <Container
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            locations={[0, 1.0]}
            colors={['#ff4000', '#b40792']}
        >
            <Content>
                <SearchBar onBack={() => navigation.navigate('Main')} />
                <ListContainer>
                    {loading ? (
                        <Loading />
                    ) : (
                        <DrinkList
                            data={cocktails}
                            keyExtractor={drink => drink.idDrink}
                            renderItem={({ item }) => (
                                <DrinkItem key={item.idDrink}>
                                    <DrinkThumb
                                        source={{ uri: item.strDrinkThumb }}
                                    />
                                    <DrinkTitle>{item.strDrink}</DrinkTitle>
                                </DrinkItem>
                            )}
                        />
                    )}
                </ListContainer>
            </Content>
        </Container>
    );
}

List.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
