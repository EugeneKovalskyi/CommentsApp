import { SITE_KEY } from '#constants'
import clsx from 'clsx'
import { primaryButton } from '#styles'

import Input from './Input'
import Textarea from '#components/Textarea'
import ReCAPTCHA from 'react-google-recaptcha'
import { useAuthForm } from '#hooks'

export default function Form({ updateComments }) {
  const {
      text,
      reCaptchaRef,
      uploadedFiles,
			register,
			errors,
			updateText,
      updateUploadedFiles,
      handleSubmit,
      updateToken,
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
        placeholder='Enter your name'
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

      <div className='mx-auto mt-4 w-11/12 text-left'>
        <span className='font-bold'>ReCAPTCHA:</span>
        {errors.token && <span className='ml-2 text-red-300'>
          {errors.token.message}
        </span>}
        <ReCAPTCHA 
          className='mt-2' 
          sitekey={SITE_KEY}
          ref={reCaptchaRef}
          name='token'
          onChange={updateToken}
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