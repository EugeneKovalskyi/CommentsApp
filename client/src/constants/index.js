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

export const testData = [
  {
    id: 1,
    coords: [1],
    name: 'Alex',
    email: 'alex@gmail.com',
    homePage: 'https://www.google.com/',
    xhtml: 'Hello World!',
    date: new Date(2025, 4, 25, 10, 45),
    answers: [
      {
        id: 2,
        coords: [1, 0],
        name: 'Bob',
        email: 'bob@gmail.com',
        homePage: 'https://www.google.com/',
        xhtml: 'Hello Alex! <script>XSS attack</script>',
        date: new Date(2025, 4, 26, 11, 10),
        answers: [],
        imgs: [],
        txts: []
      },
    ],
    imgs: [],
    txts: []
  },
  {
    id: 3,
    coords: [3],
    name: 'Charlie',
    email: 'charlie@gmail.com',
    homePage: 'https://www.google.com/',
    xhtml: 'Good day Alex!',
    date: new Date(2025, 4, 26, 16, 5),
    answers: [],
    imgs: [],
    txts: []
  },
]