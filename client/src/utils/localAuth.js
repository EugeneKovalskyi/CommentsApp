export default (user) => {
	if (user)
		for (const item in user)
			localStorage.setItem(item, user[item])
		
	else {
		localStorage.setItem('id', 1)
		localStorage.setItem('name', 'Eugene Kovalskyi')
		localStorage.setItem('email', 'tarantul.battlefield@gmail.com')
		localStorage.setItem('homePage', 'https://github.com/EugeneKovalskyi')
	}
} 