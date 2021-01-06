import request from '../utils/request';


export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};


export const UserLoginApi = body => {
    return request({
        url: 'http://127.0.0.1:8360/admin/auth/login',
        method: 'post',
        data: body
    });
};

export const GetGoodsApi = headerData => {
    return request({
        url: 'http://127.0.0.1:8360/admin/goods/index',
        method: 'get',
        headers: headerData
    });
};