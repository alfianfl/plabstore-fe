const initialState = {
    loading: false,
    diskon: [],
    error: "",
};
const diskonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DISKON_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_DISKON_SUCCESS":
            return {
                loading: false,
                diskon: action.payload,
                error: "",
            };
        case "FETCH_DISKON_FAILURE":
            return {
                loading: false,
                diskon: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
export default diskonReducer;
