import { call, put, takeLatest, all } from 'redux-saga/effects';

import { fetchCocktailsSuccess } from './actions';
import api from '../../../services/api';

export function* fetchCocktails({ payload }) {
    const { searchParam } = payload;

    if (!searchParam) {
        yield put(fetchCocktailsSuccess({ cocktails: [] }));
        return;
    }

    if (searchParam.length < 3) return;

    const response = yield call(api.get, `search.php?s=${searchParam}`);
    const { drinks: cocktails } = response.data;

    yield put(fetchCocktailsSuccess({ cocktails }));
}

export default all([
    takeLatest('@list/FETCH_COCKTAILS_REQUEST', fetchCocktails),
]);
