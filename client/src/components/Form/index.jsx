import { SITE_KEY } from '#constants'
import clsx from 'clsx'
import { primaryButton } from '#styles'

import Input from './Input'
import Textarea from '#components/Textarea'
import { useAuthForm } from '#hooks'

export default function Form({ updateComments }) {
  const {
      text,
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

      <div className='mx-auto mt-4 w-11/12 font-bold text-left'>
        Captcha:
        <div 
          className='g-recaptcha mt-2' 
          data-sitekey={SITE_KEY}
          {...register('tocken')}
        />
      </div>

      <div className='block mx-auto mt-4 w-11/12 text-left'>
        <span className='font-bold'>Text:</span>
        <div className='mt-2'>
          <Textarea
            styleType='comment'
            isAutofocus={false}
            text={text}
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