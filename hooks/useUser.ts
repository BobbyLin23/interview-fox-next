import { User, useSessionContext, useUser as useSupaUser } from '@supabase/auth-helpers-react'
import { createContext, useContext } from 'react'

type UserContextType = {
  accessToken: string | null
  user: User | null
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserContextProvider = () => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase
  } = useSessionContext()
  
  const user = useSupaUser()
  const accessToken = session?.access_token ?? null

  // const getUserDetails = () => supabase.from('profile').select('*').single()
  
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
