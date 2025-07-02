export default (form, files) => {
	const formData = new FormData()

	for (const field in form)
		formData.append(field, form[field])

	for (const key in files) 
		for (const file of files[key]) 
			formData.append(key, file.file)

	return formData
}
