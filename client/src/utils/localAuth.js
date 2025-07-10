export default (id, name, email, homePage) => {
	localStorage.setItem('id', id)
	localStorage.setItem('name', name)
	localStorage.setItem('email', email)
	localStorage.setItem('homePage', homePage)
}
