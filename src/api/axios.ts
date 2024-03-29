// 配置默认的 axios 设置
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3005/api/'
axios.defaults.timeout = 10000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//  添加请求拦截器
axios.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	(response) => {
		const { config, data, status } = response

		const Res = {
			data: data,
			status,
		}

		console.log('%c [ 接口请求: ]', 'font-size:13px; background:pink; color:#bf2c9f;', Res)

		return Res
	},
	(error) => {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

// 封装 get 和 post 方法
export const get = (url: string, params = {}) => {
	return axios.get(url, { params })
}

export const post = (url: string, data = {}) => {
	return axios.post(url, data)
}

// 通过 export default 导出 axios 对象
export default axios
