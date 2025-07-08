import Comment from '.'
import { useReplies } from '#hooks'
import ReplyForm from './ReplyForm'
import { useEffect } from 'react'

export default function Replies({ 
	replies,
	parentId,
	isReplyFormVisible,
	updateReplies,
	toggleReplies,
	toggleReplyForm
}) {

	const { socket, initReplies } = useReplies(parentId, updateReplies)

	useEffect(() => { initReplies() }, [])

	return (
		<div className='mt-8'>
			<div className='ml-8'>
				{replies.map((reply) => (
					<Comment
						key={reply.id}
						comment={reply}
					/>
				))}
			</div>

			{
				isReplyFormVisible ?
				<ReplyForm
					socket={socket}
					parentId={parentId}
					updateReplies={updateReplies}
					toggleReplies={toggleReplies}
					toggleReplyForm={toggleReplyForm}
				/>
				:
				replies.length ?
				<button
					className='mt-8 py-1 px-4 text-amber-50/70 border rounded-md  border-amber-50/50 cursor-pointer hover:bg-amber-50/10 transition-color duration-150'
					onClick={toggleReplyForm}
				>
					Add reply
				</button>
				:
				''
			}
		</div>
	)
}