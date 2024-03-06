const Mock = require('mockjs')
const mockData = Mock.mock({
	'bookInfo|6-10': [
		{
      cover: '@image("200x200", "#50B347", "#FFF", "Mock.js")',
			name: '@ctitle(1, 10)',
			author: '@cname()',
			'price|1-100': 100,
			publishDate: '@date("yyyy-MM-dd")',
		},
	],
})
export default mockData.bookInfo
