import { getSession } from '@/libs/supabase-server'
import { redirect } from 'next/navigation'

const stats = [
  { id: 1, name: 'Interview Counts', value: '0' },
  { id: 2, name: 'Interview Time', value: '0 Minutes' },
  { id: 3, name: 'Average Points', value: '0.00' },
]

export default async function Page() {
  const [session] = await Promise.all([getSession()])

  if (!session) {
    return redirect('/')
  }

  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl w-full'>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </main>
  )
}
