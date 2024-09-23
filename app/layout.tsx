

// import Footer from '@/components/footer'
// import { Navbar } from '@/components/navbar'
// import "./globals.css";
// import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// import { Urbanist } from 'next/font/google'

// const font = Urbanist({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Store',
//   description: 'Store',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
     
//         <body className={font.className}>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           <Navbar />
//           {children}
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }

import { ToastProvider } from '@/providers/toast-provider'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ModalProvider } from '@/providers/modal-provider'
import Footer from '@/components/footer'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
