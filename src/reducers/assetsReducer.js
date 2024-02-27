const initialState = {
    assets: [],
    loading: false,
    error: null,
};

const LOAD_ASSETS_BEGIN = 'LOAD_ASSETS_BEGIN';
const LOAD_ASSETS_SUCCESS = 'LOAD_ASSETS_SUCCESS';
const LOAD_ASSETS_FAILURE = 'LOAD_ASSETS_FAILURE';
const UPDATE_ASSET = 'UPDATE_ASSET';

function assetsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ASSETS_BEGIN:
            return {
                ...state,
                loading: true
            };
        case LOAD_ASSETS_SUCCESS:
            return {
                ...state,
                loading: false,
                assets: action.payload.assets
            };
        case LOAD_ASSETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case UPDATE_ASSET:
            // Example: Update asset by id
            const updatedAssets = state.assets.map(asset => 
                asset.id === action.payload.id ? {...asset, ...action.payload.updates} : asset
            );
            return {
                ...state,
                assets: updatedAssets
            };
        default:
            return state;
    }
}

export default assetsReducer;
