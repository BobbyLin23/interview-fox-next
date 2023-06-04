'use client'

import { useRouter } from 'next/navigation'
import Button from './common/Button'
import { useSupabase } from '@/providers/SupabaseProvider'
import useLoginModal from '@/hooks/useLoginModal'

const StartButton = () => {
  const router = useRouter()
  const {supabaseClient} = useSupabase()
  const loginModal = useLoginModal() 

  const handleClick = async () => {
    const { data: {
      session
    } } = await supabaseClient.auth.getSession()

    if (!session) {
      loginModal.open()
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <Button
      className="w-1/4 text-white bg-sky-500 hover:bg-sky-400"
      onClick={handleClick}
    >
      Get Started!
    </Button>
  )
}

export default StartButton
