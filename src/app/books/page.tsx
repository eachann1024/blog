'use client'
// import mockData from './mock'
import { useEffect, useState } from 'react'
import { getBooks } from '@/api/book'
import BookCard from './bookCard'
import AddBookModal from './addBookModal'
import { Button } from '@nextui-org/react'

export default function Page() {
	const [data, setData] = useState<any[]>([])

	const [state, setState] = useState({
		pages:[],
		total:0
	})
	// const [openStatus, setOpenStatus] = useState(false)

	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => {
		setIsOpen(true)
	}

	const getData = async () => {
		const res = await getBooks()
		console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
		setState(res.data)
		// setData(res.data) // 设置数据
	}

	useEffect(() => {
		getData() // 获取数据
	}, [])

	return (
		<>
			<div className="flex-center justify-end mx-20">
				<Button radius="full" className="px-5 bg-gradient-to-tr from-pink-200 to-yellow-200 text-black shadow-lg" onClick={openModal}>
					新增表单
				</Button>
			</div>
			<AddBookModal isOpen={isOpen} setIsOpen={setIsOpen} />
			<BookCard data={state.pages} />
		</>
	)
}
