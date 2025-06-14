import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    roles: [],
    users: [],
    inforPages: [],
    allPages: [],
    locationPage: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.gender = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.gender = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PAGES_SUCCESS:
            state.allPages = action.dataPg;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PAGES_FAILED:
            state.allPages = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_INFOR_PAGES_SUCCESS:
            state.inforPages = action.dataPages;
            return {
                ...state,
            }
        case actionTypes.FETCH_INFOR_PAGES_FAILED:
            state.inforPages = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_LOCATION_PAGES_SUCCESS:
            state.locationPage = action.datalocation;
            return {
                ...state,
            }
        case actionTypes.FETCH_LOCATION_PAGES_FAILED:
            state.locationPage = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;