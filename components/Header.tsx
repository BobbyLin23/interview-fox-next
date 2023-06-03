'use client'

import useLoginModal from '@/hooks/useLoginModal'
import Image from 'next/image'
import LoginModal from './modal/LoginModal'
import RegisterModal from './modal/RegisterModal'
import useRegisterModal from '@/hooks/useRegisterModal'

const Header = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  return (
    <>
      <header className="flex px-2 md:px-4 lg:px-6 py-6 shadow items-center justify-between">
        <Image src="/vercel.svg" alt="logo" width={80} height={80} />
        <button className="hover:underline" onClick={loginModal.open}>
          Sign In
        </button>
      </header>
      <LoginModal isOpen={loginModal.isOpen} onClose={loginModal.close} />
      <RegisterModal isOpen={registerModal.isOpen} onClose={registerModal.close} />
    </>
  )
}

export default Header
