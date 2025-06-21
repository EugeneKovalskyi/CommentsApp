import Textarea from '#components/Textarea'
import { useAnswerForm } from '#hooks'

export default function AnswerForm({ 
  comment, 
  authData, 
  updateComments, 
  toggleAnswers, 
  toggleAnswerForm 
}) {
  const {
    text, 
    uploadedFiles,
    register,
    errors,
    updateText,
    updateUploadedFiles,
    handleSubmit,
    addAnswer 
  } = useAnswerForm(
    authData, 
    comment, 
    updateComments, 
    toggleAnswerForm, 
    toggleAnswers
  )

  return (
    <form 
      className='mt-5'
      onSubmit={handleSubmit(addAnswer)}
    >
      <Textarea 
        styleType='answer'
        text={text}
        uploadedFiles={uploadedFiles}
        register={register}
        error={errors.text}
        updateText={updateText}
        updateUploadedFiles={updateUploadedFiles}
      />

      <div className='grid grid-cols-2 gap-4 mt-4'>
        <button
          className='justify-self-end py-1 w-20 border rounded-sm bg-amber-50/10 cursor-pointer hover:bg-amber-50/20'
          onClick={toggleAnswerForm}
        >
          Cancel
        </button>

        <button
          className='justify-self-start py-1 w-20 border rounded-sm bg-amber-50/10 cursor-pointer hover:bg-amber-50/20'>
          Send
        </button>
      </div>
    </form>
  )
}
