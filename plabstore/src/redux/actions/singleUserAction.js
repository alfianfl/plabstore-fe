import axios from "axios";
export const fetchSingleUser = (id) => {
    return (dispatch) => {
        dispatch(fetchSingleUserRequest());
        axios
            .get(`http://localhost:3004/users/${id}`)
            .then((response) => {
                const User = response.data;
                dispatch(fetchSingleUserSuccess(User));
            })
            .catch((err) => {
                const errMsg = err.message;
                dispatch(fetchSingleUserFailure(errMsg));
            });
    };
};
export const fetchSingleUserRequest = () => {
    return {
        type: "FETCH_SINGLEUSER_REQUEST",
    };
};

export const fetchSingleUserSuccess = (User) => {
    return {
        type: "FETCH_SINGLEUSER_SUCCESS",
        payload: User,
    };
};
export const fetchSingleUserFailure = (errMsg) => {
    return {
        type: "FETCH_SINGLEUSER_FAILURE",
        payload: errMsg,
    };
};
