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
        url: 'https://www.ylhzzy.top:8825/admin/auth/login',
        method: 'post',
        data: body
    });
};

export const GetGoodsApi = headerData => {
    return request({
        url: 'https://www.ylhzzy.top:8825/admin/goods/index',
        method: 'get',
        headers: headerData
    });
};

export const GetGoodsByIDApi = params => {
    var headerData = new Object;
    var paramsData = new Object;
    //params
    paramsData["categoryId"] = params["categoryId"];
    //header
    headerData["x-nideshop-token"] = params["x-nideshop-token"];
    return request({
        url: 'https://www.ylhzzy.top:8825/admin/goods/getGoodsById',
        method: 'get',
        params: paramsData,
        headers: headerData,
    });
};

//获取一级分类
export const GetTopCategoryApi = headerData => {
    return request({
        url: 'https://www.ylhzzy.top:8825/admin/category/topCategory',
        method: 'get',
        headers: headerData
    });
};
//获取二级分类
export const GetSecCategoryApi = params => {
    var headerData = new Object;
    var paramsData = new Object;
    //params
    paramsData["parentID"] = params["parentID"];
    //header
    headerData["x-nideshop-token"] = params["x-nideshop-token"];
    return request({
        url: 'https://www.ylhzzy.top:8825/admin/category/secCategory',
        method: 'get',
        params: paramsData,
        headers: headerData
    });
};