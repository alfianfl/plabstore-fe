import axios from "axios";
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
            .get(`http://localhost:3004/users`)
            .then((response) => {
                const Users = response.data;
                dispatch(fetchUsersSuccess(Users));
            })
            .catch((err) => {
                const errMsg = err.message;
                dispatch(fetchUsersFailure(errMsg));
            });
    };
};
export const fetchUsersRequest = () => {
    return {
        type: "FETCH_USERS_REQUEST",
    };
};

export const fetchUsersSuccess = (Users) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: Users,
    };
};
export const fetchUsersFailure = (errMsg) => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: errMsg,
    };
};
