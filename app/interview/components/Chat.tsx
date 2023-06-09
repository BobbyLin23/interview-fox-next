const Chat = () => {
  return (
    <div className="flex-1 relative">
      <div className="p-4 border-b text-sm">
        Interview Chat
      </div>
      <div className="absolute w-full border-t bottom-0 px-3 py-3 cursor-pointer text-neutral-500">
        <span>Please Input...</span>
      </div>
    </div>
  )
}

export default Chat
