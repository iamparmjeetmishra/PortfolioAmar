import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";

export default function Socials({ className, aClassName }) {
  return (
    <>
      <div className={className}>
        <a
          href="https://www.instagram.com/amarjeetmishra001/"
          target="_blank"
          className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-cyan-100 hover:text-black transition-all"
        >
          <FaInstagram className="w-7 h-7" />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-cyan-100 hover:text-black transition-all"
        >
          <FaYoutube className="w-7 h-7" />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-cyan-100 hover:text-black transition-all"
        >
          <FaGoogleDrive className="w-7 h-7" />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-cyan-100 hover:text-black transition-all"
        >
          <IoDocumentTextSharp className="w-7 h-7" />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-3 bg-gray-600/50 rounded-md cursor-pointer hover:bg-cyan-100 hover:text-black transition-all"
        >
          <TbBrandFiverr className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
