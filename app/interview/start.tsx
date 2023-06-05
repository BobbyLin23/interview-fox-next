'use client'

import Button from '@/components/common/Button'
import useInterviewStep from '@/hooks/useInterviewStep'
import Image from 'next/image'

const Start = () => {
  const interviewStep = useInterviewStep()

  if (interviewStep.step !== 0) {
    return null
  }

  const goNext = () => {
    interviewStep.setStep(1)
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-48 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image className='mx-auto' src="/openai.svg" width={40} height={40} alt="logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Start your interview now!
        </h2>
      </div>
      <Button className='mt-10 w-1/4 mx-auto' onClick={goNext}>Get Started!</Button>
    </div>
  )
}

export default Start
