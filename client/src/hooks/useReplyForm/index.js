import { useForm } from 'react-hook-form'
import { useUploadFiles } from '#hooks'
import post from './post'

export default (
  socket,
  parent, 
  updateComments, 
) => {
  const { 
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { uploadedFiles, updateUploadedFiles } = useUploadFiles()
  const text = watch('text', '')
  const updateText = (value) => setValue('text', value)

  const addReply = async ({ text }) => {
    const reply = await post(socket, parent, text, uploadedFiles)

    updateText('')
    updateComments((draft) => {
      const parentCoords = [...parent.coords]
      const mainCommentCoords = parentCoords.shift()
      let repliesDraft = null

      for (const mainCommentDraft of draft)
        if (mainCommentDraft.id === mainCommentCoords) {
          repliesDraft = mainCommentDraft.replies
          break
        }

      while (parentCoords.length !== 0) {
        const i = parentCoords.shift()
        repliesDraft = repliesDraft[i].replies
      }

      repliesDraft.push(reply)
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
