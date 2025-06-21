import { MAX_IMG_SIZE, MAX_TXT_SIZE } from '#constants'
import { getImageDimensions } from '#utils'

export default async function getFiles(files) {
	const imgs = []
	const txts = []

	for (let file of files) {
		const ext = file.name.match(/(?<=\.)\w+$/i)[0]

		if ((ext === 'png' || ext === 'jpg' || ext === 'gif') 
			&& file.size <= MAX_IMG_SIZE) 
		{
			const src = URL.createObjectURL(file)
			const { width, height } = await getImageDimensions(src)

			imgs.push({
				id: Math.random(),
				name: file.name,
				width,
				height,
				src,
				file,
			})
			
		} else if (ext === 'txt' && file.size <= MAX_TXT_SIZE) {
			const href = URL.createObjectURL(file)
			file.onload = () => URL.revokeObjectURL(href)

			txts.push({
				id: Math.random(),
				name: file.name,
				href,
				file,
			})
		}
	}

	return { imgs, txts }
}