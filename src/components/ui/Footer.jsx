
const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <footer className="font-medium py-6 border-y-2 text-center">
      © {year} All Rights Reserved | Made with ♡ by <a href="https://parmjeetmishra.com" target="_blank" className="hover:text-cyan-600 " >Parm</a>
    </footer>
  )
}

export default Footer