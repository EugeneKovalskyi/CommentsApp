import { HOST } from '#constants'
import auth from './auth'
import { createFormDataFrom } from '#utils'

export default async (form, files) => {
	const { name, email, homePage, text } = form
	const userId = await auth(name, email, homePage)
	
	const formData = createFormDataFrom(form, files)
	formData.append('userId', userId)

	const response = await fetch(HOST, {
		method: 'POST',
		body: formData,
	})
	const { user, id, date, imgs, txts } = await response.json()

	return {
		id,
		text,
		date,
		imgs,
		txts,
		user,
		coords: [id],
		replies: []
	}
}
