const Button = ({ href, className, text }) => {
  return (
    <a href={href} className={`${className} relative inline-block px-4 py-2 font-medium group`}>
        <span className="absolute inset-0 w-full h-full rounded-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-cream border-2 rounded-full border-black group-hover:bg-black"></span>
          <span className="relative text-black rounded-full group-hover:text-white">{ text }</span>
      </a>
  )
}

export default Button