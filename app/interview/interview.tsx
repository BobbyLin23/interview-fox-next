'use client'

import useInterviewStep from "@/hooks/useInterviewStep"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
import QuestionsList from "./components/QuestionsList"
import Chat from "./components/Chat"
import Information from "./components/Information"

const Interview = () => {
  const interviewStep = useInterviewStep()

  useEffect(() => {
    toast.success('Interview successfully started!')
  }, [])

  if (interviewStep.step !== 2) {
    return null
  }

  return (
    <div className="w-full h-[88vh] shadow bg-neutral-50 flex">
      <QuestionsList />
      <Chat />
      <Information />
    </div>
  )
}

export default Interview
