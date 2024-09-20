
import { getCategories } from '@/actions/get-categories'
import Link from 'next/link'


import Container from './ui/container'
import { NavbarActions } from './navbar-actions'
import MainNav from './main-nav'

export const revalidate = 0;
export const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl font-size: 24px;" >STORE</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}