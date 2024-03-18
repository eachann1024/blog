import { Card, Skeleton, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'
import { useEffect, useMemo, useState } from 'react'

interface Book {
	cover: string
	title: string
	name: string
	author: string
}
export default function BookCard({ data }: { data: Book[] }) {
	const [isLoad, setIsLoad] = useState(false)
	/* useEffect(() => {
		data.length && setIsLoad(true)
	}, [data]) */

	useMemo(() => (data?.length ? setIsLoad(true) : setIsLoad(false)), [data])

	return (
		<div className=" w-full lg:w-1200px m-auto my-5 flex-middle  flex-wrap gap-3">
			{data?.map((item, index) => {
				return (
					<Card key={index} className="w-[280px] space-y-5 p-4 mb-3" radius="lg">
						<Card shadow="sm" key={index} isPressable onPress={() => console.log('item pressed')}>
							<CardBody className="overflow-visible p-0">
								{/* Skeleton */}
								<Skeleton className="w-full h-[140px] rounded-t-lg" isLoaded={isLoad}>
									{/* 图片不生效默认为: https://placehold.co/248x130/000000/FFFFFF/png */}
									<Image shadow="sm" radius="lg" width="100%" alt={item.title} className="w-full object-cover h-[140px]" src={item.cover} />
								</Skeleton>
							</CardBody>
							<CardFooter>
								<Skeleton className="flex-full h-4" isLoaded={isLoad}>
									<div className="flex w-full text-small justify-between">
										<b>{item.title}</b>
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
