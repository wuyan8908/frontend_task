import axios from 'axios';

export function requestGetUsers(token) {
    return axios.request({
        method:'get',
        url:'/api/v2/users/',
        headers:{'authorization':token}
    })

}

export function requestGetUserDetail(id,token) {
    return axios.request({
        method:'get',
        url:`/api/v2/users/${id}`,
        headers:{'authorization':token}
    })

}

export function requestUserCreate(data,token) {
    return axios.request({
        method:'post',
        url:`/api/v2/users`,
        headers:{'authorization':token},
        data: data
    })
}

export function requestUserEdit(id,data,token) {
    return axios.request({
        method:'patch',
        url:`/api/v2/users/${id}`,
        headers:{'authorization':token},
        data: data
    })
}

export function requestUserDelete(id,token) {
    return axios.request({
        method:'delete',
        url:`/api/v2/users/${id}`,
        headers:{'authorization':token}
    })
}