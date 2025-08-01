import { HOST } from '#constants'
import { createFormDataFrom, getLocalAuth } from '#utils'

export default async (socket, parentId, text, uploadedFiles) => {
	const formData = createFormDataFrom({}, uploadedFiles)

	const responseFiles = await fetch(`${HOST}/files`, {
		method: 'POST',
		body: formData,
	})

	const { imgs, txts } = await responseFiles.json()
	const user = getLocalAuth()
	const userId = +user.id

	const { id, date } = await socket.emitWithAck('post:reply', {
		userId,
		parentId,
		text,
		imgs,
		txts,
	})

	return {
		parentId,
		id,
		text,
		date,
		imgs,
		txts,
		user,
		replies: [],
	}
}
