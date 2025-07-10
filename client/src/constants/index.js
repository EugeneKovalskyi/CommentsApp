export const PORT = 4001
export const HOST = 'http://localhost:' + PORT
export const WS_HOST = 'ws://localhost:' + PORT
// export const HOST = 'http://45.94.156.33:' + PORT
// export const WS_HOST = 'ws://45.94.156.33:' + PORT
export const GRAPHQL = HOST + '/graphql'
export const SITE_KEY = '6LeCuHcrAAAAAPTLolXNk0ywiwPU3vBuHriP7Jrd'
export const MAX_COMMENTS = 25
export const MAX_TAGS_NESTING_DEPTH = 5
export const MAX_FILES_NUMBER = 5
export const MAX_IMG_SIZE = 10485760
export const MAX_TXT_SIZE = 102400

export const TEXTAREA_BUTTONS = [
	{
		title: 'S',
		tagName: 'strong',
		attributes: ''
	},
		{
		title: 'I',
		tagName: 'i',
		attributes: ''
	},
		{
		title: 'C',
		tagName: 'code',
		attributes: ''
	},
		{
		title: 'A',
		tagName: 'a',
		attributes: ' href="" title=""'
	}
]