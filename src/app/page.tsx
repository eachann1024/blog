import Image from 'next/image'
import { Avatar } from '@nextui-org/react'

export default function Home() {
	return (
		<div className="flex-middle mt-20">
			<div>
				<p className='mb-1'>
					Welcome to <code>Eachann blob</code>!
				</p>
				<Avatar className='w-20 h-20' src="https://i.pravatar.cc/150?u=a04258114e2902702d" />
			</div>
			{/* <main className="bg-red-1 text-55px flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="...">
					Get started by editing&nbsp;
					<code className="font-mono font-bold">src/app/page.tsx</code>
				</p>
			</div>
		</main> */}
		</div>
	)
}
