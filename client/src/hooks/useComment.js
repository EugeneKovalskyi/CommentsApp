import { useMemo, useRef, useState } from 'react'
import { getXhtmlFromText } from '#utils'

export default (socket, comment) => {
	const xhtml = useMemo(() => getXhtmlFromText(comment.text), [comment.text])
	const xhtmlContainerRef = useRef(null)
	const [ isRepliesVisible, setIsRepliesVisible ] = useState(false)
	const [ isReplyFormVisible, setIsReplyFormVisible ] = useState(false)
	
	const toggleReplyForm = () => setIsReplyFormVisible(irfv => !irfv)

	const connectToReplies = () => {
		const room = String(comment.id)

		socket.emit('join', room)
		setIsReplyFormVisible(true)
		setIsRepliesVisible(true)
	}

	const toggleReplies = async () => {
		const room = String(comment.id)

		setIsRepliesVisible(irv => {
			if (irv) {
				setIsReplyFormVisible(false)
				socket.emit('leave', room) 
			} else
				socket.emit('join', room)

			return !irv
		})
	}
	
	return {
		xhtml,
		xhtmlContainerRef,
		isRepliesVisible,
		isReplyFormVisible,
		toggleReplies,
		toggleReplyForm,
		connectToReplies,
	}
}