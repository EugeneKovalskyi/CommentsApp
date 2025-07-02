import clsx from 'clsx'
import { primaryButton } from '#styles'

import Input from './Input'
import Textarea from '#components/Textarea'
import { useAuthForm } from '#hooks'

export default function Form({ updateComments }) {
  const {
      formText,
      uploadedFiles,
			register,
			errors,
			updateText,
      updateUploadedFiles,
      handleSubmit,
			addComment
		} = useAuthForm(updateComments)

  return (
    <form
      className='block mx-auto p-5 w-1/2 text-center text-amber-50 border-2 border-amber-50/50 rounded-md bg-amber-50/20'
      onSubmit={handleSubmit(addComment)}
    >
      <Input 
        title='Name:'
        register={register}
        name={'name'}
        options={{ required: 'is required *' }}
        error={errors.name}
      />

      <Input 
        title='Email:'
        register={register}
        name={'email'}
        options={{ required: 'is required *' }}
        error={errors.email}
        placeholder='example@gmail.com'
      />

      <Input 
        title='Home page:'
        register={register}
        name={'homePage'}
        placeholder='https://example.com/'
      />

      {/* <Input 
        title={ <img className='inline-block' alt="CAPTcha" />}
        register={register}
        name='captcha'
        options={{ required: 'is required *' }}
        error={errors.captcha}
      /> */}

      <div className='block mx-auto mt-4 w-11/12 text-left'>
        <span className='font-bold'>Text:</span>
        <div className='mt-2'>
          <Textarea
            styleType='comment'
            formText={formText}
            uploadedFiles={uploadedFiles}
            register={register}
            error={errors.text}
            updateText={updateText}
            updateUploadedFiles={updateUploadedFiles}
          />
        </div>
      </div>

      <button className={clsx('block mx-auto my-5', primaryButton)}>
        Send
      </button>
    </form>
  )
}