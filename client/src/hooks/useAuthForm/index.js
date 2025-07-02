import { useForm } from 'react-hook-form'
import { useUploadFiles } from '#hooks'
import { localAuth } from '#utils'
import post from './post'

export default (updateComments) => {
	const {
		register,
		setValue,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			name: localStorage.getItem('name'),  
			email: localStorage.getItem('email'),
			homePage: localStorage.getItem('homePage') 
		},
	})

	const { uploadedFiles, updateUploadedFiles } = useUploadFiles()
	const formText = watch('text')
	const updateText = (value) => setValue('text', value)

	const addComment = async (form) => {
		const comment = await post(form, uploadedFiles)

		updateComments((draft) => { draft.unshift({ ...comment }) })
		localAuth(comment.user)
	}

	return {
		formText,
		uploadedFiles,
		register,
		errors,
		updateText,
		updateUploadedFiles,
		handleSubmit,
		addComment,
	}
}
