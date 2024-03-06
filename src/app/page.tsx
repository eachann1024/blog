'use client'

import Link from 'next/link'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
	return (
		<NextUIProvider>
			<h1>Index Page</h1>
		</NextUIProvider>
	)
}
