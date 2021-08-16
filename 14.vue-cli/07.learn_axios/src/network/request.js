// 使用axios

// axios请求方式：axios(config)，axios.request(config)，axios.get(url[, config])，
// axios.delete(url[, config])，axios.head(url[, config])，axios.options(url[, config])，
// axios.post(url[, data[, config]])，axios.put(url[, data[, config]])，axios.patch(url[, data[, config]]。

// axios请求配置(config)是创建请求时可以用的配置选项：请求的服务器URL：url:''（只有这项是必需的）；
// 请求时使用的方法：method:''（默认get方法）；请求路径：baseURL:''（服务器URL是相对URL时自动加在URL前）；
// 请求前的数据处理：transformRequest:[function(data){}]；请求后的数据处理：transformResponse:[function(data){}]；
// 自定义的请求头：headers:{}；发送的URL参数：params:{}；查询对象序列化函数：paramsSerializer:function(params){}；
// 请求主体发送的数据：data:{}；超时设置：timeout:；自定义请求处理：adapter:function(config){},
// 跨域是否需要使用凭证：withCredentials:；HTTP基础验证：auth:{}；响应的数据类型：responseType: ''等等。

import axios from "axios";

// 一.基本使用
// 没有请求参数
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})
// 有请求参数
axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'get',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

// 二.并发请求&三.配置全局axios默认值
// 配置全局的axios默认值，这些值将被用在各个请求的配置默认值，需用axios的defaults对象。
axios.defaults.baseURL = 'http://123.207.32.32:8000';
axios.defaults.timeout = 5000;
// 并发请求需用axios.all(iterable)函数。其接收包含多个请求的数组，请求返回的结果是一个数组。
// 使用axios.spread(callback)可将数组结果[res1,res2]展开为res1, res2。
axios.all([
  axios({
    url: '/home/multidata',
  }),
  axios({
    url: 'home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))

// 四.创建axios实例
// 可以使用自定义配置新建一个axios实例，即自定义实例默认值，需用axios.create([config])函数。
const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
// 使用实例发送网络请求
instance({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
});

instance({
  url: 'home/data',
  params: {
    type: 'sell',
    page: 5
  }
}).then(res => {
  console.log(res)
})