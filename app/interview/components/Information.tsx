const Information = () => {
  return (
    <div className="h-full w-[200px] shadow">
      <div className="p-4 border-b text-sm">
        Information
      </div>
      <div className="flex flex-col text-sm p-4 gap-3 text-neutral-600">
        <span className="text-neutral-800">Interview Info</span>
        <span className="text-xs text-neutral-400">
          Date
        </span>
        <span className="leading-4">2023-06-03 13:21</span>
        <span className="text-xs text-neutral-400">
          Job Type
        </span>
        <span className="leading-4">Front End Developer</span>
        <span className="text-xs text-neutral-400">
          Level
        </span>
        <span className="leading-4">
          Junior
        </span>
      </div>
      <div className="border-b w-full" />
      <div className="flex flex-col text-sm p-4 gap-3 text-neutral-600">
        <span>Time</span>
        <span className="text-base text-neutral-950">00:00</span>
      </div>
      <div className="border-b w-full" />
      <div className="flex flex-col text-sm p-4 gap-3 text-neutral-600">
        <span className="text-neutral-800">OpenAI</span>
        <span className="text-xs text-neutral-400">
          API Key
        </span>
        <span className="leading-4">**************</span>
        <span className="text-xs text-neutral-400">
          Base URL
        </span>
        <span className="leading-4">https://api.openai.com</span>
        <span className="text-xs text-neutral-400">
          OpenAI model
        </span>
        <span className="leading-4">
          gpt-3.5-turbo
        </span>
      </div>
    </div>
  )
}

export default Information
