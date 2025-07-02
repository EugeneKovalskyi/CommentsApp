import Comment from '.'
import ReplyForm from './ReplyForm'

export default function Replies({ 
	socket,
	parent,
	isReplyFormVisible,
	updateComments,
	toggleReplies
}) {

	return (
		<div className='ml-8 mt-6'>
			{parent.replies.map((reply) => (
				<Comment
					socket={socket}
					key={reply.id}
					comment={reply}
					updateComments={updateComments}
				/>
			))}

			{
				isReplyFormVisible
				&&
				<ReplyForm
					socket={socket}
					parent={parent}
					updateComments={updateComments}
					toggleReplies={toggleReplies}
				/>
			}
		</div>
	)
}
