import axios from 'axios';

export function requestGetUsers(token) {
    return axios.request({
        method:'get',
        url:'/api/v2/users/',
        headers:{'authorization':token}
    })

}
