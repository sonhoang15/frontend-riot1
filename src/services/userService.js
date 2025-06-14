import axios from "../axios"
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    console.log('check data service', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', { data: { id: userId } })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getInforPageHomeService = (limit) => {
    return axios.get(`/api/infor-page-home?limit=${limit}`)
}
const getAllpages = () => {
    return axios.get(`/api/all-pages`)
}
const saveInforPageService = (data) => {
    return axios.post('/api/save-infor-pages', data)
}
const getAllLocationService = (location_id) => {
    return axios.get(`/api/get-infor-page-by-location?location_id=${location_id}`);
};
export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getAllpages,
    saveInforPageService,
    getInforPageHomeService,
    getAllLocationService
};