import ToasterProvider from '@/providers/ToasterProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interview Fox',
  description: 'Your AI interviewer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
