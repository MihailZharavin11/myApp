import axios from "axios";


const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "43ca0caf-ac78-4c58-8705-1350399a60c0"
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    postFollow(id) {
        return instanceAPI.post(`follow/${id}`, null).then(response => {

        });
    },

    deleteFollow(id) {
        return instanceAPI.delete(`follow/${id}`).then(response => {

        });
    },

};

export const profileAPI = {
    showUserProfile(userId) {
        return instanceAPI.get(`/profile/${userId}`).then(response => {
            return response.data;
        });
    },
    getStatus(userId) {
        return instanceAPI.get(`/profile/status/${userId}`).then(response => {
            return response.data;
        });
    },
    updateStatus(status) {
        return instanceAPI.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data;
        });
    }
};

export const authAPI = {
    setUserAuth() {
        return instanceAPI.get(`auth/me`).then(response => {
            return response.data;
        });
    },

    loginUser(email,password,rememberMe){
        return instanceAPI.post('/auth/login',{
            email,
            password,
            rememberMe
        }).then(response =>{
            return response.data;
        });
    },
    logOutUser(){
        return instanceAPI.delete('/auth/login');
    }
};