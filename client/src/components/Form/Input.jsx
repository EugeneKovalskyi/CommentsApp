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
      <label className='relative block mt-4'>
        <span className='font-bold'>{title}</span>
        {error && <span className='absolute left-1/2 translate-x-8 text-red-300'>{error?.message}</span>}
        <input
          className='block mx-auto mt-2 px-2 py-1 w-11/12 wrap-break-word text-center border rounded-sm border-amber-50/70 bg-amber-50/10 hover:bg-amber-50/20'
          placeholder={placeholder}
          {...register(name, options)}
        />
      </label>
    )
  }