export function fetchCocktailsRequest({ searchParam }) {
    return {
        type: '@list/FETCH_COCKTAILS_REQUEST',
        payload: { searchParam },
    };
}

export function fetchCocktailsSuccess({ cocktails }) {
    return {
        type: '@list/FETCH_COCKTAILS_SUCCESS',
        payload: { cocktails },
    };
}
