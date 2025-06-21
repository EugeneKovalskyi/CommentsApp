import chevronDownSrc from '#public/chevron-down.svg'
import chevronUpSrc from '#public/chevron-up.svg'

export default function AnswersBtn({
  answersNumber,
  isAnswersVisible,
  toggleAnswers,
}) {
  return (
    <div className='mt-4 ml-8'>
      <button
        className='text-amber-50/70 cursor-pointer hover:underline'
        onClick={toggleAnswers}
      >
        <img
          className='inline mr-1 w-3'
          src={isAnswersVisible ? chevronUpSrc : chevronDownSrc}
          alt='chevron'
        />
        Answers ( {answersNumber} )
      </button>
    </div>
  )
}