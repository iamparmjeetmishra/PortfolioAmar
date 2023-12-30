
const Footer = () => {
    let fullYear = new Date()
    let year = fullYear.getFullYear()
  return (
    <div className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
    <div className="container">
        <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
        © {year} All Rights Reserverd | Made with ♡ By <a href="https://parmjeetmishra.com" target="_blank" rel="noreferrer">Parm</a></p>
    </div>
</div>
  )
}

export default Footer