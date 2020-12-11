//统一封装请求

import http from './index'

export default {

    login(username, password) {
        return http.post('login', {
            username,
            password
        })
    }
}