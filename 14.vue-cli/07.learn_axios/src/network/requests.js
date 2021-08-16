// 使用axios

// axios请求方式：axios(config)，axios.request(config)，axios.get(url[, config])，
// axios.delete(url[, config])，axios.head(url[, config])，axios.options(url[, config])，
// axios.post(url[, data[, config]])，axios.put(url[, data[, config]])，axios.patch(url[, data[, config]]。

// axios请求配置是创建请求时可以用的配置选项：请求的服务器URL：url:''（只有这项是必需的）；
// 请求时使用的方法：method:''（默认get方法）；请求路径：baseURL:''（服务器URL是相对URL时自动加在URL前）；
// 请求前的数据处理：transformRequest:[function(data){}]；请求后的数据处理：transformResponse:[function(data){}]；
// 自定义的请求头：headers:{}；发送的URL参数：params:{}；查询对象序列化函数：paramsSerializer:function(params){}；
// 请求主体发送的数据：data:{}；超时设置：timeout:；自定义请求处理：adapter:function(config){},
// 跨域是否需要使用凭证：withCredentials:；HTTP基础验证：auth:{}；响应的数据类型：responseType: ''等等。

import axios from "axios";

// 五.封装requests模块
// 可封装多个模块都导出
export function requests(config) {

  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.添加拦截器
  // axios拦截器：在请求或响应被then或catch处理前拦截它们。
  // 添加请求拦截器，需用axios.interceptors.request.use()函数。
  // 对于实例，则是instance.interceptors.request.use()函数。
  instance.interceptors.request.use(
    // 在发送请求之前做些什么
    (con) => {
      console.log(con);
      return con;
    }),
    // 对请求错误做些什么
    (err) => {
    console.log(err)
  }

  // 添加响应拦截器，需用axios.interceptors.request.use()函数。
  // 对于实例，则是instance.interceptors.request.use()函数。
  instance.interceptors.response.use(
    // 对响应数据做点什么
    (res) => {
      console.log(res);
      return res.data;
    }),
    // 对响应错误做点什么
    (err) => {
    console.log(err)
  }

  // 3.返回实例，等待调用实例
  // 实例本身为Promise，直接返回，可以直接使用instance实例发送网络请求
  return instance(config);
}

export function request1(config,success,failure) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 发送网络请求
  instance(config)
    .then(res => {
    success(res)
    })
    .catch(err => {
    failure(err)
  })
}

export function request2(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 发送网络请求
  instance(config.baseConfig)
    .then(res => {
    config.success(res)
    })
    .catch(err => {
    config.failure(err)
  })
}

export function request3(config) {
  return new Promise((resole,reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 发送网络请求
    instance(config)
      .then(res => {
        resole(res)
      })
      .catch(err => {
        reject(err)
    })
  })
}





