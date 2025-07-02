import Textarea from '#components/Textarea'
import { useReplyForm } from '#hooks'

export default function ReplyForm({ 
  socket,
  parent, 
  updateComments, 
  toggleReplies
}) {
  const {
    text,
    uploadedFiles,
    register,
    errors,
    updateText,
    updateUploadedFiles,
    handleSubmit,
    addReply
  } = useReplyForm(
    socket,
    parent,
    updateComments,
    toggleReplies
  )

  return (
    <form 
      className='mt-5'
      onSubmit={handleSubmit(addReply)}
    >
      <Textarea 
        styleType='reply'
        text={text}
        uploadedFiles={uploadedFiles}
        register={register}
        error={errors.text}
        updateText={updateText}
        updateUploadedFiles={updateUploadedFiles}
      />

      <div className='grid grid-cols-2 gap-4 mt-4'>
        <button
          className='justify-self-end py-1 w-30 border rounded-sm bg-green-500/10 cursor-pointer hover:bg-green-500/30 transition-colors duration-150'>
          Send
        </button>

        <button
          className='justify-self-start py-1 w-30 border rounded-sm bg-red-500/10 cursor-pointer hover:bg-red-500/30 transition-colors duration-150'
          onClick={toggleReplies}
        >
          Disconnect
        </button>
      </div>
    </form>
  )
}
