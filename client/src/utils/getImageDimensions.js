export default (imageURL) => {
	return new Promise((resolve, reject) => {
		const image = new Image()

		image.src = imageURL

		image.onload = () => {
			URL.revokeObjectURL(imageURL)
			resolve({ width: image.width, height: image.height })
		}
		image.onerror = () => reject(new Error('Upload error!', { cause: 'UPLOAD_ERROR' }))
	})
}