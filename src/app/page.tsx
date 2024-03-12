'use client'

import { NextUIProvider } from '@nextui-org/react'
import '@/api/axios'

export default function Home() {
	return (
		<NextUIProvider>
			<h1 className="text-xl mt20">Index Page</h1>
		</NextUIProvider>
	)
}
