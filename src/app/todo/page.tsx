'use client'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, CheckboxGroup, Checkbox } from '@nextui-org/react'

export default function App() {
	const [todo, setTodo] = React.useState({
		data: [],
	})
	const [list, setList] = React.useState([
		{ id: '1', title: 'Books MockJs', checked: true },
		{ id: '2', title: '部署后端', checked: false },
		{ id: '3', title: '聊天模块', checked: false },
	])
	return (
    // 设计预留需要不居中 w-1200px 
		<div className="">
			<Card className="w-[350px]">
				{/* 	<CardHeader className="flex gap-3">
				<Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
				<div className="flex flex-col">
					<p className="text-md">NextUI</p>
					<p className="text-small text-default-500">nextui.org</p>
				</div>
			</CardHeader>
		 */}
				<CardBody>
					<p className="mb font-bold">下一个功能列表</p>
					<Divider className="mb" />
					{list.map((item, index) => {
						return (
							<Checkbox
								className="mb-1"
								key={index}
								value={item.id}
								isSelected={item.checked}
								onValueChange={(value) => {
									const newList = list.map((i) => {
										if (i.id === item.id) {
											i.checked = value
										}
										return i
									})
									setList(newList)
								}}
							>
								{item.title}
							</Checkbox>
						)
					})}
				</CardBody>
				<Divider />
				{/* <CardFooter>
				<Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
					Visit source code on GitHub.
				</Link>
			</CardFooter> */}
			</Card>
		</div>
	)
}
