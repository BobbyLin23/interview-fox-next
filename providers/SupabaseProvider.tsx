'use client'

import {
  SupabaseClient,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface SessionProviderProps {
  children: React.ReactNode
}

type SupabaseContext = {
  supabaseClient: SupabaseClient
}

const Context = createContext<SupabaseContext | undefined>(undefined)

const SupabaseProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabaseClient])

  return (
    <Context.Provider value={{ supabaseClient }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }

  return context
}

export default SupabaseProvider
