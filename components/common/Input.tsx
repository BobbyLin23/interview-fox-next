'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`,
          disabled && 'opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
