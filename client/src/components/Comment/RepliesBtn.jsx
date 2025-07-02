import chevronDownSrc from '#public/chevron-down.svg'
import chevronUpSrc from '#public/chevron-up.svg'

export default function RepliesBtn({
  repliesNumber,
  isRepliesVisible,
  toggleReplies,
}) {
  return (
    <div className='mt-4 ml-8'>
      <button
        className='text-amber-50/70 cursor-pointer hover:underline'
        onClick={toggleReplies}
      >
        <img
          className='inline mr-1 w-3'
          src={isRepliesVisible ? chevronUpSrc : chevronDownSrc}
          alt='chevron'
        />
        Replies ( {repliesNumber} )
      </button>
    </div>
  )
}