import TextareaAutosize from 'react-textarea-autosize'

export default function Input({
  title,
  register,
  name,
  options,
  error,
  placeholder,
}) {
    return (
      <label className='block mt-4 text-left'>
        <div className='mx-auto w-11/12'>
          <span className='font-bold'>{title}</span>
          {error && <span className='inline ml-2 text-red-300'>{error?.message}</span>}
        </div>
        <input
          className='block mx-auto mt-2 px-2 py-1 w-11/12 wrap-break-word border rounded-sm border-amber-50/70 bg-amber-50/10 hover:bg-amber-50/20'
          placeholder={placeholder}
          {...register(name, options)}
        />
      </label>
    )
  }