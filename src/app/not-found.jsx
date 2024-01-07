import Link from 'next/link'

export default function notFound() {
    return (
        <div className="px-4 w-full h-screen flex flex-col gap-4 items-center justify-center">
            <p className='block leading-3'>404 | Page Not found</p>
            <Link href='/' className='mt-4 px-3 py-2 border-2 border-black rounded-full'  >Home</Link>
        </div>
    )
}