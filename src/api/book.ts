import { get } from './axios'

export async function getBooks() {
	const res = await get('/book')
	console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
	return res.data
}
