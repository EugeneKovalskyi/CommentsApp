
import Header from './Header'
import Files from './Files'
import Replies from './Replies'
import RepliesBtn from './RepliesBtn'

import { useEffect } from 'react'
import { useComment } from '#hooks'

export default function Comment({ comment }) {
	const {
		replies,
		xhtml,
		xhtmlContainerRef,
		isRepliesVisible,
		isReplyFormVisible,
		initComment,
		updateReplies,
		toggleReplies,
		toggleReplyForm,
		showRepliesAndForm
	} = useComment(
		comment.id,
		comment.text
	)

	useEffect(() => {
		xhtmlContainerRef.current?.append(xhtml)
	}, [xhtmlContainerRef.current])

	useEffect(() => initComment(), [])

	return (
		<div className='mt-8 border-amber-50/10'>
			<Header
				user={comment.user}
				date={new Date(comment.date)}
				showRepliesAndForm={showRepliesAndForm}
			/>

			<div
				className='p-4 whitespace-pre-wrap wrap-break-word border-x border-b border-amber-50/10'
				ref={xhtmlContainerRef}
			/>

			<Files
				imgs={comment.imgs}
				txts={comment.txts}
			/>

			{
				!!replies.length 
				&& 
				<RepliesBtn
					repliesNumber={replies.length}
					isRepliesVisible={isRepliesVisible}
					toggleReplies={toggleReplies}
				/>
			}
			{
				isRepliesVisible
				&& 
				<Replies
					replies={replies}
					parentId={comment.id}
					isReplyFormVisible={isReplyFormVisible}
					updateReplies={updateReplies}
					toggleReplies={toggleReplies}
					toggleReplyForm={toggleReplyForm}
				/>
			}
		</div>
	)
}
