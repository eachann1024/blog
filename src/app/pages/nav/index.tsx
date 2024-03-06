export default function Nav() {
	const navList = [
		{ name: '博客', url: '/blog' },
		{ name: '简历', url: '/resume' },
		{ name: '图书管理', url: '/book' },
	]
	return (
		<div className="flex-middle gap-2">
			<h1 className="p2 mr-5"> 导航 </h1>
			{navList.map((item, index) => {
				return (
					<a key={index} href={item.url} className="px4 py1 rd-40 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 drop-shadow shadow-black text-white">
						{item.name}
					</a>
				)
			})}
		</div>
	)
}
