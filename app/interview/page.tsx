import { getSession } from '@/libs/supabase-server'
import { redirect } from 'next/navigation'
import BodyContent from './bodyContent'

export default async function Page() {
  const [session] = await Promise.all([getSession()])

  if (!session) {
    return redirect('/')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <BodyContent />
    </div>
  )
}
