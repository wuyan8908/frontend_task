import axios from 'axios';

export function requestSignout() {
    return axios.request({
        method:'DELETE',
        url:'/api/v2/users/tokens'
    })

}
