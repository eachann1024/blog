import Link from 'next/link'
import Nav from '@/components/nav'

export default function Home() {
	return (
		<main>
			{/* <Nav /> */}
			<div className="b b-blue w-full h-full"></div>
			{
				// 15 遍历 15 次
				[...Array(25)].map((_, i) => (
					<div key={i}>
						<h2>Book {i}</h2>
						<p>This is a book</p>
					</div>
				))
			}
		</main>
	)
}
