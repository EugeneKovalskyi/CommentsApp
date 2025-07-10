import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useUploadFiles } from '#hooks'
import post from './post'

export default (updateComments) => {
	const {
		register,
		setError,
		clearErrors,
		setValue,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: localStorage.getItem('name'),  
			email: localStorage.getItem('email'),
			homePage: localStorage.getItem('homePage') 
		}
	})

	const { 
		uploadedFiles, 
		updateUploadedFiles, 
		resetUploadedFiles
	} = useUploadFiles()
	const reCaptchaRef = useRef(null)
	const text = watch('text', '')
	const updateText = (value) => setValue('text', value)
	const updateToken = (token) => {
		clearErrors('token')
		setValue('token', token)
	}

	const addComment = async (form) => {
		if (!form.token) {
			setError('token', { message: 'is required *' })
			return``
		}

		const comment = await post(form, uploadedFiles)

		reCaptchaRef.current.reset()
		setValue('token', '')
		updateText('')
		resetUploadedFiles()
		updateComments(draft => { draft.unshift({ ...comment }) })
	}
		
	return {
		text,
		reCaptchaRef,
		uploadedFiles,
		register,
		errors,
		updateText,
		updateUploadedFiles,
		handleSubmit,
		updateToken,
		addComment,
	}
}
