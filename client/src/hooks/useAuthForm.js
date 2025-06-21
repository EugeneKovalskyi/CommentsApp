import { useForm } from 'react-hook-form'
import { useUploadFiles } from '#hooks'

export default (updateComments, updateAuthData) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: 'Eugene Kovalskyi',
      email: 'tarantul.battlefield@gmail.com',
      homePage: 'https://github.com/EugeneKovalskyi',
      text: 'Hello, my name is Eugene, I`m from Cherkassy',
    },
  })

  const { uploadedFiles, updateUploadedFiles } = useUploadFiles()

  const text = watch('text')
  const updateText = (value) => setValue('text', value)
    
  const addComment = (comment) => 
    updateComments((draft) => {
      const id = Date.now()
      
      draft.unshift({
        id,
        coords: [id],
        name: comment.name,
        email: comment.email,
        homePage: comment.homePage,
        xhtml: comment.text,
        date: Date.now(),
        answers: [],
        imgs: uploadedFiles.imgs,
        txts: uploadedFiles.txts
      })
      
      updateAuthData({ name: comment.name, email: comment.email })
    })

  return {
    text,
    uploadedFiles,
    register,
    errors,
    updateText,
    updateUploadedFiles,
    handleSubmit,
    addComment,
  }
}