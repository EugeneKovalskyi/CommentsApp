import { MAX_IMG_SIZE, MAX_TXT_SIZE } from '#constants'

export default async function getFiles(files) {
	const imgs = []
	const txts = []

	for (let file of files) {
		const name = file.name
		const ext = name.match(/(?<=\.)\w+$/i)[0]

		if ((ext === 'png' || ext === 'jpg' || ext === 'gif') 
			&& file.size <= MAX_IMG_SIZE) 
		{
			const src = URL.createObjectURL(file)

			imgs.push({
				name,
				src,
				file
			})
			
		} else if (ext === 'txt' && file.size <= MAX_TXT_SIZE) {
			const href = URL.createObjectURL(file)
			file.onload = () => URL.revokeObjectURL(href)

			txts.push({
				name,
				href,
				file,
			})
		}
	}

	return { imgs, txts }
}