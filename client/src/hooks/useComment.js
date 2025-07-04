import { HOST } from '#constants'

import { useMemo, useRef, useState } from 'react'
import { useImmer } from 'use-immer'
import { getXhtmlFromText } from '#utils'

export default (id, text) => {
	const xhtml = useMemo(() => getXhtmlFromText(text), [text])
	const xhtmlContainerRef = useRef(null)
	const [ replies, updateReplies ] = useImmer([])
	const [ isRepliesVisible, setIsRepliesVisible ] = useState(false)
	const [ isReplyFormVisible, setIsReplyFormVisible ] = useState(false)

	const initComment = () => {
		const getReplies = async () => {
			const response = await fetch(`${HOST}/${id}`)
			const data = await response.json()

			updateReplies(() => data)
		}
		getReplies()
	}

	const toggleReplyForm = () => {
		setIsReplyFormVisible((irfv) => !irfv)
		if (!replies.length) setIsRepliesVisible(false)
	}

	const showRepliesAndForm = () => {
		setIsReplyFormVisible(true)
		setIsRepliesVisible(true)
	}

	const toggleReplies = async () => {
		setIsRepliesVisible(irv => !irv)
		if (!isRepliesVisible)
			setIsReplyFormVisible(false)
	}

	return {
		replies,
		xhtml,
		xhtmlContainerRef,
		isRepliesVisible,
		isReplyFormVisible,
		initComment,
		updateReplies,
		toggleReplies,
		toggleReplyForm,
		showRepliesAndForm,
	}
}
