
export default function ButtonPort({title='Adobe'}) {
    return (
        <button className='font-bold px-2.5 rounded-full py-1 border shadow border-black  hover:bg-black hover:text-white hover:border-black transition-all '><a href="#">{ title}</a></button>
    )
}