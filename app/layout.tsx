

import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
     
        <body className={font.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}


// import { ModalProvider } from '@/providers/modal-provider'
// import { ToastProvider } from '@/providers/toast-provider'
// import type { Metadata } from 'next'
// import { Urbanist } from 'next/font/google'

// import { Footer } from '@/components/footer'
// import { Navbar } from '@/components/navbar'

// const urbanist = Urbanist({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Store',
//   description: 'Store',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={urbanist.className}>
//         <ModalProvider />
//         <ToastProvider />
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }