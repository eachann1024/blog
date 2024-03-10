import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav' // 引入Nav组件

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Eachann Web',
	description: 'This is my personal website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				<div className="flex-middle w-100vw flex-warp pt-30 px2">{children}</div>
			</body>
		</html>
	)
}
