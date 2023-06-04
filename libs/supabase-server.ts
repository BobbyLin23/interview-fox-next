import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { cache } from 'react'

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient({ cookies })
)

export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getSubscription() {
  const supabase = createServerSupabaseClient()
}
