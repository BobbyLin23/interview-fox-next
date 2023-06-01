'use client'

import Image from "next/image"

const Header = () => {
  return (
    <header className="flex px-2 md:px-4 lg:px-6 py-6 shadow items-center justify-between">
      <Image src="/vercel.svg" alt="logo" width={80} height={80} />
      <span className="cursor-pointer hover:underline">Sign In</span>
    </header>
  )
}

export default Header
