import actionTypes from './actionTypes';
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService,
    getAllpages,
    saveInforPageService,
    getInforPageHomeService,
    getAllLocationService
} from '../../services/userService';
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e);
        }

    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchRoleStart error', e);
        }

    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed!");
                dispatch(createUserSuccess());
                dispatch(fetchAllUserStart()); // Fetch all users after creating a new user
            } else {
                toast.error("Create user error!");
                dispatch(createUserFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchRoleStart error', e);
        }

    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUserFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchAllUserStart error', e);
        }

    }
}

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})




export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("delete user succeed!");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart()); // Fetch all users after creating a new user
            } else {
                toast.error("Delete user error!");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchRoleStart error', e);
        }

    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUser = (inputData) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(inputData);
            if (res && res.errCode === 0) {
                toast.success("update user succeed!");
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart()); // Fetch all users after creating a new user
            } else {
                toast.error("update user error!");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("update user error!");
            dispatch(fetchGenderFailed());
            console.log('fetchRoleStart error', e);
        }

    }
}


export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS

})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})


export const fetchAllPages = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllpages();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_PAGES_SUCCESS,
                    dataPg: res.data
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_PAGES_FAILED
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_PAGES_FAILED
            });
            console.log('fetchAllUserStart error', e);
        }

    }
}

export const saveInforPage = (data) => {
    return async (dispatch, getState) => {

        try {
            let res = await saveInforPageService(data);
            if (res && res.errCode === 0) {
                toast.success("save infor PAGE succeed!");
                dispatch({
                    type: actionTypes.SAVE_INFOR_PAGE_SUCCESS,
                });
            } else {
                toast.error("save infor PAGE error!");
                dispatch({
                    type: actionTypes.SAVE_INFOR_PAGE_FAILED,
                });
            }
        } catch (e) {
            toast.error("save infor PAGE error!");
            console.log('SAVE_INFOR_PAGE_FAILED:', e);
            dispatch({
                type: actionTypes.SAVE_INFOR_PAGE_FAILED,
            });

        }

    }
}

export const fetchLoadingpage = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getInforPageHomeService(4);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_INFOR_PAGES_SUCCESS,
                    dataPages: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_INFOR_PAGES_FAILED
                });
            }

        } catch (e) {
            console.log('FETCH_INFOR_PAGES_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_INFOR_PAGES_FAILED
            });
        }

    }
}

export const getAllLocation = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllLocationService(4);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_LOCATION_PAGES_SUCCESS,
                    datalocation: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_LOCATION_PAGES_FAILED
                });
            }

        } catch (e) {
            console.log('FETCH_LOCATION_PAGES_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_LOCATION_PAGES_FAILED
            });
        }

    }
}