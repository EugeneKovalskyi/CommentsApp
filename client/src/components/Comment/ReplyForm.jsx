import Textarea from '#components/Textarea'
import { useReplyForm } from '#hooks'

export default function ReplyForm({ 
  socket,
  parentId, 
  updateReplies, 
  toggleReplies,
  toggleReplyForm
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
    parentId,
    updateReplies,
    toggleReplies
  )

  return (
    <form 
      className='mt-8'
      onSubmit={handleSubmit(addReply)}
    >
      <Textarea 
        styleType='reply'
        isAutofocus={true}
        text={text}
        uploadedFiles={uploadedFiles}
        register={register}
        error={errors.text}
        updateText={updateText}
        updateUploadedFiles={updateUploadedFiles}
      />

      <div className='flex gap-4 justify-center mt-4'>
        <button
          className='py-1 w-30 border rounded-sm bg-green-500/10 cursor-pointer hover:bg-green-500/30 transition-colors duration-150'>
          Send
        </button>

        <button
          className='py-1 w-30 border rounded-sm cursor-pointer hover:bg-amber-50/20 transition-colors duration-150'
          onClick={toggleReplyForm}
        >
          Cancel
        </button>

        <button
          className='py-1 w-30 border rounded-sm bg-red-500/10 cursor-pointer hover:bg-red-500/30 transition-colors duration-150'
          onClick={toggleReplies}
        >
          Disconnect
        </button>
      </div>
    </form>
  )
}
