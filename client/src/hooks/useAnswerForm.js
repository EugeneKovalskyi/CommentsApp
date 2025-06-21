import { useForm } from 'react-hook-form'
import { getXhtmlFromText } from '#utils'
import { useUploadFiles } from '#hooks'

export default (
  authData, 
  comment, 
  updateComments, 
  toggleAnswerForm, 
  toggleAnswers
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

  const addAnswer = () => {
    const xhtml = getXhtmlFromText(text)

    toggleAnswerForm()
    toggleAnswers('visible')
    updateComments((draft) => {
      const id = Date.now()
      const coords = [...comment.coords, comment.answers.length]

      const commentCoords = [...comment.coords]
      const mainCommentCoords = commentCoords.shift()
      let answersDraft = null

      for (const mainCommentDraft of draft)
        if (mainCommentDraft.id === mainCommentCoords) {
          answersDraft = mainCommentDraft.answers
          break
        }

      while (commentCoords.length !== 0) {
        const i = commentCoords.shift()
        answersDraft = answersDraft[i].answers
      }

      answersDraft.push({
        id,
        coords,
        name: authData.name,
        email: authData.email,
        xhtml,
        date: new Date(),
        answers: [],
        imgs: uploadedFiles.imgs,
        txts: uploadedFiles.txts
      })
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
    addAnswer
  }
}
