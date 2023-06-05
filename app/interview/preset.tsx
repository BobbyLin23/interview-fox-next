'use client'

import Button from '@/components/common/Button'
import useInterviewStep from '@/hooks/useInterviewStep'

const Preset = () => {
  const interviewStep = useInterviewStep()

  if (interviewStep.step !== 1) {
    return null
  }

  const goNext = () => {
    interviewStep.setStep(2)
  }

  const goBack = () => {
    interviewStep.setStep(0)
  }

  return (
    <form className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Preset
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will help your have a good interview experience.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-3">
            <label
              htmlFor="position"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Position
            </label>
            <div className="mt-2">
              <select
                id="position"
                name="poistion"
                autoComplete="position-name"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Front End Developer</option>
                <option>Back End Developer</option>
                <option>Full Stack Developer</option>
              </select>
            </div>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="jd"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Job Description
            </label>
            <div className="mt-2">
              <textarea
                id="jd"
                name="jd"
                rows={8}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Input the JD of the position you want to apply for.
            </p>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="count"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Question Counts
            </label>
            <div className="mt-2">
              <input
                id="count"
                name="count"
                type="number"
                autoComplete="count"
                className="block w-1/2 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <Button className='mt-12' onClick={goNext}>Next</Button>
        </div>
      </div>
    </form>
  )
}

export default Preset
