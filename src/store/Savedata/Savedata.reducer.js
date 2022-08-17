// TODO update this import when renamed
import { CATEGORY_ACTION_TYPE, SEARCH_ACTION_TYPE } from './Savedata.action';

/** @namespace myFirstApp/Store/Savedata/Reducer/getInitialState */
export const getInitialState = () => ({
    category: [],
    modelId: null
});

/** @namespace myFirstApp/Store/Savedata/Reducer/SavedataReducer */
export const SavedataReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case CATEGORY_ACTION_TYPE:
        const { category } = action;
        return {
            ...state,
            // TODO implement payload handling
            category
        };
    case SEARCH_ACTION_TYPE:
        const { modelId } = action;
        return {
            ...state,
            modelId
        };

    default:
        return state;
    }
};

export default SavedataReducer;
