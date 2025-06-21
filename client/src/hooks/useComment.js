import { useRef, useState } from 'react'

export default () => {
	const xhtmlContainerRef = useRef(null)
	const [ isAnswersVisible, setIsAnswersVisible ] = useState(false)
	const [ isAnswerFormVisible, setIsAnswerFormVisible ] = useState(false)

	const toggleAnswers = (visibility) =>
    setIsAnswersVisible(i => {
			if (visibility === 'visible') return true
			else return !i
    })
	const toggleAnswerForm = () => setIsAnswerFormVisible(i => !i)
	
	return {
		xhtmlContainerRef,
		isAnswersVisible,
		isAnswerFormVisible,
		toggleAnswers,
		toggleAnswerForm
	}
}