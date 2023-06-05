import { create } from 'zustand'

export enum STEPS {
  START,
  PRESET,
  INTERVIEW,
  END,
}

interface InterviewStep {
  step: STEPS
  setStep: (step: STEPS) => void
}

const useInterviewStep = create<InterviewStep>((set) => ({
  step: STEPS.START,
  setStep: (step) => set({ step }),
}))

export default useInterviewStep
