import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png"
import {CrossIcon, BarIcon} from '../public'


const Navbar = () => {

  // const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <nav className="flex justify-between items-center border py-2" >
        <div>
          <Link href="/">
            <Image src={Logo} alt="Amar Logo Image" className="w-24" />
          </Link>
        </div>
        <div>
          <ul className=" flex gap-2">
            <Link className="link" href="/">Home</Link>
            <Link className="link" href="/work">Work</Link>
            <Link className="link" href="/about">About</Link>
            <Link className="link" href="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
