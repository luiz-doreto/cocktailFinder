import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    cocktails: [],
};

export default function list(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@list/FETCH_COCKTAILS_REQUEST': {
                const { searchParam } = action.payload;
                if (searchParam.length >= 3) {
                    draft.loading = true;
                }
                break;
            }
            case '@list/FETCH_COCKTAILS_SUCCESS': {
                draft.loading = false;
                draft.cocktails = action.payload.cocktails;
                break;
            }
            default:
        }
    });
}
