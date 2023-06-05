'use client'

import useInterviewStep, { STEPS } from '@/hooks/useInterviewStep'
import Start from './start'
import Preset from './preset'
import Interview from './interview'

const BodyContent = () => {
  const interviewStep = useInterviewStep()

  let bodyContent: JSX.Element = <Start />

  if (interviewStep.step === STEPS.START) {
    bodyContent = <Start />
  }

  if (interviewStep.step === STEPS.PRESET) {
    bodyContent = <Preset />
  }

  if (interviewStep.step === STEPS.INTERVIEW) {
    bodyContent = <Interview />
  }

  return <div>{bodyContent}</div>
}

export default BodyContent
