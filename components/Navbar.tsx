'use client'

import { Disclosure } from "@headlessui/react"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge";

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Interview', href: '/interview' },
  { name: 'Settings', href: '/settings' }
];

const Navbar = () => {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-white h-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <div className="flex">
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {
                    navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={twMerge(
                          pathname === item.href
                            ? 'border-slate-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
