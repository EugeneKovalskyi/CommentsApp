export default () => ({
	id: localStorage.getItem('id'),
	name: localStorage.getItem('name'),
	email: localStorage.getItem('email'),
	homePage: localStorage.getItem('homePage'),
})