'use clinet'

import { useSupabase } from '@/providers/SupabaseProvider'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { toast } from 'react-hot-toast'

interface AvatarProps {
  src?: string
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const { supabaseClient } = useSupabase()
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()

    if (!error) {
      toast.success('Successfully logged out!')
      router.refresh()
    } else {
      toast.error(error.message)
    }
  }

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Image
              src={src || '/images/placeholder.jpg'}
              alt="avatar"
              width={20}
              height={20}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white cursor-pointer"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default Avatar
