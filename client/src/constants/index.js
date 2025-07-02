export const HOST = 'http://localhost:3001'
export const GRAPHQL = HOST + '/graphql'
export const WS_HOST = 'ws://localhost:3001'
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

const test = `Start. <strong>Hello</strong> <i>my</i> <code>let name = 'Eugene'</code>, here is my <a href='https://github.com/EugeneKovalskyi' title="GitHub">GitHub</a>.
<strong>I learn <code>JavaScript</code> 2 years.</strong>
<script>It's XSS</script>. End.`