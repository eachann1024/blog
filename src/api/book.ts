import { get, post } from './axios'

const URL = {
	getBooks: '/book',
	addBooks: '/book/add',
}

export async function getBooks() {
	return get(URL.getBooks)
}

export interface IAddBooks {
	title: string
	description: string
	cover: string
	author: string
	category?: string
}

export async function addBooks(data: IAddBooks) {
	return post(URL.addBooks, data)
}
