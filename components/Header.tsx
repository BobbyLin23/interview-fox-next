'use client'

import useLoginModal from '@/hooks/useLoginModal'
import Image from 'next/image'
import LoginModal from './modal/LoginModal'
import RegisterModal from './modal/RegisterModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { Session } from '@supabase/auth-helpers-nextjs'
import Avatar from './common/Avatar'
import { useEffect, useState } from 'react'
import { useSupabase } from '@/providers/SupabaseProvider'
import Navbar from './Navbar'

const Header = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const { supabaseClient } = useSupabase()

  const [session, setSession] = useState<Session | null>(null)

  const getSession = async () => {
    const {
      data: { session },
    } = await supabaseClient.auth.getSession()

    setSession(session)
  }

  useEffect(() => {
    getSession()
  })

  return (
    <>
      <header className="flex px-2 mb-2 md:px-4 lg:px-6 py-6 items-center justify-between">
        <div className="flex items-center">
          <span className='text-xl text-sky-500'>Interview Fox</span>
          {session && <Navbar />}
        </div>
        {session ? (
          <Avatar />
        ) : (
          <button className="hover:underline" onClick={loginModal.open}>
            Sign In
          </button>
        )}
      </header>
      <LoginModal isOpen={loginModal.isOpen} onClose={loginModal.close} />
      <RegisterModal
        isOpen={registerModal.isOpen}
        onClose={registerModal.close}
      />
    </>
  )
}

export default Header
