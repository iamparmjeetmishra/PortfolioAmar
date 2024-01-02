import Link from 'next/link'

const NavLink = ({ icon, href, title }) => {
    return (
        
            <Link
                to={href}
                
            >
                <span className="text-xl mb-1 w-5">{ icon }</span> {title}
            </Link>
    )
}

export default NavLink