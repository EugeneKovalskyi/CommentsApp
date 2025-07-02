import { HOST } from '#constants'

import Header from './Header'
import Files from './Files'
import Replies from './Replies'
import RepliesBtn from './RepliesBtn'

import { useEffect, useState } from 'react'
import { useComment } from '#hooks'

export default function Comment({ socket, comment, updateComments }) {
	const {
		xhtml,
		xhtmlContainerRef,
		isRepliesVisible,
		isReplyFormVisible,
		toggleReplies,
		torggleReplyForm,
		connectToReplies,
	} = useComment(
		socket,
		comment,
		updateComments
	)

	// const [ replies, setReplies ] = useState([])

	useEffect(() => {
		if(xhtmlContainerRef.current) {
			// const getReplies = async () => {
			// 	const response = await fetch(`${HOST}/${comment.id}`)
			// 	const data = await response.json()
				
			// 	for (let i = 0; i < data.length; i++)
			// 		data[i] = [...comment.coords, i]

			// 	setReplies(data)
			// }
			// getReplies()
			
			xhtmlContainerRef.current?.append(xhtml)
		}
	}, [xhtmlContainerRef.current])

	return (
		<div className='my-5'>
			<Header
				user={comment.user}
				date={new Date(comment.date)}
				connectToReplies={connectToReplies}
			/>

			<div
				className='p-4 whitespace-pre-wrap wrap-break-word border-b border-amber-50/10'
				ref={xhtmlContainerRef}
			/>

			<Files
				imgs={comment.imgs}
				txts={comment.txts}
			/>

			{
				!!comment.replies?.length 
				&& 
				<RepliesBtn
					repliesNumber={comment.replies.length}
					isRepliesVisible={isRepliesVisible}
					toggleReplies={toggleReplies}
				/>
			}
			{
				isRepliesVisible 
				&& 
				<Replies
					socket={socket}
					parent={comment}
					isReplyFormVisible={isReplyFormVisible}
					updateComments={updateComments}
					toggleReplies={toggleReplies}
				/>
			}
		</div>
	)
}
