'use client'
import { Card, Skeleton, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'
import mockData from './mock'
import { useEffect, useState } from 'react'

// 每次mockData 数据改动重新输出
// console.log(11, mockData)

export default function Page() {
	const [isLoad, setIsLoad] = useState(false)
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		// 生成长度为mockData长度的空数组
		setData([...Array(mockData.length).fill('')])

		setTimeout(() => {
			setData(mockData)
			setIsLoad(true)
		}, 1000)
	}, [])
	return (
		<div className=" w-full lg:w-1200px m-auto my-5 flex-middle  flex-wrap gap-3">
			{data.map((item, index) => {
				return (
					<Card key={index} className="w-[280px] space-y-5 p-4 mb-3" radius="lg">
						<Card shadow="sm" key={index} isPressable onPress={() => console.log('item pressed')}>
							<CardBody className="overflow-visible p-0">
								{/* Skeleton */}
								<Skeleton className="w-full h-[140px] rounded-t-lg" isLoaded={isLoad}>
									<Image shadow="sm" radius="lg" width="100%" alt={item.title} className="w-full object-cover h-[140px]" src={item.cover} />
								</Skeleton>
							</CardBody>
							<CardFooter>
								<Skeleton className="flex-full h-4" isLoaded={isLoad}>
									<div className="flex w-full text-small justify-between">
										<b>{item.name}</b>
										<p className="text-default-500">{item.author}</p>
									</div>
								</Skeleton>
							</CardFooter>
						</Card>
					</Card>
				)
			})}
		</div>
	)
}
