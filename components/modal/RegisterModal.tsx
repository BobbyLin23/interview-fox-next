'use client'

import useLoginModal from '@/hooks/useLoginModal'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useSupabase } from '@/providers/SupabaseProvider'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { supabaseClient } = useSupabase()

  const toggleLoginModal = () => {
    loginModal.open()
    onClose()
  }

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabaseClient.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
          data: {
            username: values.username,
          },
        },
      })
      console.log(data)
      if (error) {
        toast.error(error.message)
        return
      } else {
        toast.success('Success! Check your email for confirmation link!')
        reset()
        onClose()
        router.refresh()
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                >
                  <span>Sign Up</span>
                  <AiOutlineClose
                    className="cursor-pointer hover:text-gray-600"
                    size={18}
                    onClick={onClose}
                  />
                </Dialog.Title>
                <div className="mt-4">
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          type="email"
                          disabled={isLoading}
                          required
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          {...register('email')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="usernmae"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          {...register('username')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        {...register('password')}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-sky-300 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-neutral-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className="cursor-pointer hover:underline hover:text-sky-600"
                          onClick={toggleLoginModal}
                        >
                          Sign In
                        </span>
                        <span>Forget Password</span>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default RegisterModal
