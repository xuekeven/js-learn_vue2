// 使用axios

// axios API：axios(config)、axios(url[, config])。

// 请求方法的别名：
//    axios.request(config)、axios.get(url[, config])、axios.delete(url[, config])、
//    axios.head(url[, config])、axios.options(url[, config])、axios.post(url[, data[, config]])、
//    axios.put(url[, data[, config]])、axios.patch(url[, data[, config]]。
//    注意，在使用别名方法时， url、method、data 这些属性都不必在配置中指定。

// 并发：axios.all(iterable)、axios.spread(callback)。

// 创建实例：
//    可以使用自定义配置新建一个 axios 实例：axios.create([config])

// 请求配置：
//    请求配置是创建请求时可以用的配置选项：
//    `url` 是用于请求的服务器 URL（只有这项是必需的）
//    `method` 是创建请求时使用的方法（默认get方法）
//    `baseURL` 是请求路径，将自动加在 `url` 前，除非 `url` 是绝对 URL
//    `transformRequest` 允许在向服务器发送前，修改请求数据
//    （只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法）
//    （后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream）
//    `transformResponse` 在把响应数据传递给 then/catch 
//    `headers` 是即将被发送的自定义请求头
//    `params` 是即将与请求一起发送的 URL 参数
//    （必须是一个无格式对象或者 URLSearchParams 对象）
//    `paramsSerializer` 是一个负责 `params` 序列化的函数
//     `data` 是作为请求主体被发送的数据
//    （只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法）
//    `timeout` 指定请求超时的毫秒数（0 表示无超时时间）
//    `withCredentials` 表示跨域请求时是否需要使用凭证
//    `adapter` 允许自定义处理请求，以使测试更轻松
//    `auth` 表示应该使用 HTTP 基础验证，并提供凭据
//    `responseType` 表示服务器响应的数据类型，等等。

// 响应结构：
//    `data` 由服务器提供的响应
//    `status` 来自服务器响应的 HTTP 状态码
//    `statusText` 来自服务器响应的 HTTP 状态信息
//    `headers` 服务器响应的头
//    `config` 是为请求提供的配置信息
//    `request` is the request that generated this response

import axios from "axios";

// 五.封装 requests 模块

// 可封装多个模块都导出
export function requests(config) {

  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.添加拦截器
  // axios 拦截器：在请求或响应被 then 或 catch 处理前拦截它们。

  // 2.1 添加请求拦截器，需用 axios.interceptors.request.use() 函数。
  // 对于实例，则是 instance.interceptors.request.use() 函数。
  instance.interceptors.request.use(
    // 在发送请求之前做些什么
    con => {
      console.log(con);
      return con;
    },
    // 对请求错误做些什么
    err => {
      console.log(err)
    }
  )

  // 2.2 添加响应拦截器，需用 axios.interceptors.request.use() 函数。
  // 对于实例，则是 instance.interceptors.request.use() 函数。
  instance.interceptors.response.use(
    // 对响应数据做点什么
    res => {
      console.log(res);
      return res.data;
    },
    // 对响应错误做点什么
    err => {
      console.log(err)
    }
  )

  // 3.返回实例，等待调用实例
  // 实例本身为 Promise，直接返回，可以直接使用 instance 实例发送网络请求
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
    .then(res => success(res))
    .catch(err => failure(err))
}

export function request2(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 发送网络请求
  instance(config.baseConfig)
    .then(res => config.success(res))
    .catch(err => config.failure(err))
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
      .then(res => resole(res))
      .catch(err => reject(err))
  })
}