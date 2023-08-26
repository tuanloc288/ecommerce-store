import Link from "next/link"

import Container from "./ui/Container"
import MainNav from "./MainNav"
import getCategories from "@/actions/getCategories"
import NavbarActions from "./NavbarActions"

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <nav className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href="/"
            className="ml-4 flex lg:ml-0 gap-x-2"
          >
            <p className="font-bold text-xl">MODERNISM</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions/>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar