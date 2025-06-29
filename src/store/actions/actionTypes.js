const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',


    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',


    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',


    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILED: 'FETCH_ALL_USERS_FAILED',

    FETCH_ALL_PAGES_SUCCESS: 'FETCH_ALL_PAGES_SUCCESS',
    FETCH_ALL_PAGES_FAILED: 'FETCH_ALL_PAGES_FAILED',

    FETCH_INFOR_PAGES_SUCCESS: 'FETCH_INFOR_PAGES_SUCCESS',
    FETCH_INFOR_PAGES_FAILED: 'FETCH_INFOR_PAGES_FAILED',

    FETCH_LOCATION_PAGES_SUCCESS: 'FETCH_LOCATION_PAGES_SUCCESS',
    FETCH_LOCATION_PAGES_FAILED: 'FETCH_LOCATION_PAGES_FAILED',

    SAVE_INFOR_PAGE_SUCCESS: 'SAVE_INFOR_PAGE_SUCCESS',
    SAVE_INFOR_PAGE_FAILED: 'SAVE_INFOR_PAGE_FAILED',
})

export default actionTypes;