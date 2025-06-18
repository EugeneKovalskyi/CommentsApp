import { useEffect } from 'react'
import { useComment } from '#hooks'

import Header from './Header'
import AnswerForm from './AnswerForm'
import Files from './Files'
import AnswersBtn from './AnswersBtn'

export default function Comment({ comment, authData, updateComments }) {
	// const
	const {
		xhtmlContainerRef,
		isAnswersVisible,
		isAnswerFormVisible,
		toggleAnswers,
		toggleAnswerForm
	} = useComment()

	useEffect(() => {
		if (xhtmlContainerRef.current) {
			xhtmlContainerRef.current.innerHTML = ''
			xhtmlContainerRef.current.append(comment.xhtml)
		}
	}, [comment.xhtml])

	return (
    <div className='my-5'>
      <Header
        name={comment.name}
        date={new Date(comment.date)}
				email={comment.email}
				toggleAnswerForm={toggleAnswerForm}
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
				!!comment.answers.length 
				&&
				<AnswersBtn
					answersNumber={comment.answers.length}
					isAnswersVisible={isAnswersVisible}
					toggleAnswers={toggleAnswers}
				/>
			}
			
			<div className='ml-8 mt-6'>
				{
					isAnswersVisible
					&&
					comment.answers.map(answer => (
						<Comment 
							key={answer.id}
							comment={answer}
							authData={authData}
							updateComments={updateComments}
						/>
					))
				}
				{
					isAnswerFormVisible 
					&&
					<AnswerForm
						comment={comment}
						authData={authData}
						updateComments={updateComments}
						toggleAnswers={toggleAnswers}
    				toggleAnswerForm={toggleAnswerForm}
					/>
      	}
			</div>
    </div>
  )
}