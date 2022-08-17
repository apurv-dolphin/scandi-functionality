// TODO rename
export const CATEGORY_ACTION_TYPE = 'CATEGORY_ACTION_TYPE';
export const SEARCH_ACTION_TYPE = 'SEARCH_ACTION_TYPE';

// TODO rename
/** @namespace myFirstApp/Store/Savedata/Action/categoryAction */
export const categoryAction = (category) => ({
    type: CATEGORY_ACTION_TYPE,
    category
});

/** @namespace myFirstApp/Store/Savedata/Action/searchAction */
export const searchAction = (modelId) => ({
    type: SEARCH_ACTION_TYPE,
    modelId
});
