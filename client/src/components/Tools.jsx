import clsx from 'clsx'
import sortingOrderSrc from '#public/sorting-order.svg'

export default function Tools({
  sortingCriterion,
  isDescSorting,
  handleSortByCriterion,
  handleChangeOrder,
}) {
  return (
    <div className='flex px-5 py-2 border-b-2 border-amber-50/50 rounded-t-md bg-amber-50/10'>
      <div className='flex-1 self-center text-right'>
        <b>Sort by</b>
        <select
          className='ml-1 px-2 py-1 rounded-md cursor-pointer hover:bg-amber-50/10'
          value={sortingCriterion}
          onChange={handleSortByCriterion}
        >
          <option value='name'>name</option>
          <option value='date'>date</option>
          <option value='email'>email</option>
        </select>

        <img
          className={clsx(
            isDescSorting && 'scale-x-[-1]',
            'inline ml-1 px-1 py-0.5 w-8 -translate-y-0.5 rounded-md cursor-pointer hover:bg-amber-50/10'
          )}
          src={sortingOrderSrc}
          alt='sortingOrder'
          onClick={handleChangeOrder}
        />
      </div>
    </div>
  )
}
