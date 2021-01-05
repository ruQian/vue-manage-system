import request from '../utils/request';


export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};


export const UserLoginApi = query => {
    return request({
        url: 'http://127.0.0.1:8360/admin/auth/login',
        method: 'post',
        data: query
    });
};

