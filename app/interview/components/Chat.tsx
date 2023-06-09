import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Chat = () => {
  const [showInput, setShowInput] = useState(false)

  return (
    <div className="flex-1 relative">
      <div className="p-4 border-b text-sm">Interview Chat</div>
      {!showInput ? (
        <div
          className="absolute w-full border-t bottom-0 px-6 py-3 cursor-pointer text-neutral-400"
          onClick={() => setShowInput(true)}
        >
          <span>Please Input...</span>
        </div>
      ) : (
        <Transition
          show={showInput}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='absolute bottom-0 w-full'>
            <textarea
              id="chat"
              name="chat"
              className="w-full border px-6 py-3 bg-transparent h-40 resize-none focus:outline-none"
              placeholder="Please Input"
              cols={10}
            />
            <div className='w-full flex items-center justify-end py-2 px-4'>
              <div className='border p-1 rounded cursor-pointer'>
                <AiOutlineSend className='w-6 h-6 text-neutral-500 hover:text-neutral-800' />
              </div>
              
            </div>
          </div>
        </Transition>
      )}
    </div>
  )
}

export default Chat
