import Header from '@/components/Header'
import { getSession } from '@/libs/supabase-server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const [session] = await Promise.all([getSession()])

  if (!session) {
    return redirect('/')
  }

  return (
    <div>
      <Header />
      <h1>{session?.user.email}</h1>
    </div>
  )
}
