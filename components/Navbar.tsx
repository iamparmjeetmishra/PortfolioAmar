import Link from "next/link"

const Navbar = () => {
  return (
      <>
          <nav>
              <div><Link href="/">Amar</Link></div>
              <div>
                  <ul>
                      <Link href='/' >Home</Link>
                      <Link href='/work'>Work</Link>
                      <Link href='/about' >About</Link>
                      <Link href='/contact' >Contact</Link>
                  </ul>
              </div>
        </nav>
      </>
  )
}

export default Navbar