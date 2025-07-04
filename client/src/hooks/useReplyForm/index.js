import { useForm } from 'react-hook-form'
import { useUploadFiles } from '#hooks'
import post from './post'

export default (
  socket,
  parentId, 
  updateReplies, 
) => {
  const { 
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { 
    uploadedFiles,
    updateUploadedFiles,
    resetUploadedFiles
  } = useUploadFiles()
  const text = watch('text', '')
  const updateText = (value) => setValue('text', value)

  const addReply = async ({ text }) => {
    const reply = await post(socket, parentId, text, uploadedFiles)

    updateText('')
    resetUploadedFiles()
    updateReplies(draft => {
      draft.push(reply)
    })
  }

  return {
    text,
    uploadedFiles,
    register,
    errors,
    updateText,
    updateUploadedFiles,
    handleSubmit,
    addReply
  }
}
