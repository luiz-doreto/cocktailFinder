import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Content = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled(LinearGradient)`
    flex: 1;
    padding: 10px;
`;

export const ListContainer = styled.View`
    margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#FFF',
})``;

export const DrinkList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 60 },
})``;

export const DrinkItem = styled.View`
    flex-direction: row;
    align-items: center;
    height: 120px;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const DrinkThumb = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin: 0 20px;
    background: #eee;
`;

export const DrinkTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;
