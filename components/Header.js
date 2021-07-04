import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Link href='/' passHref>Recursos</Link>
            <div className='container mx-auto bg-gray-800 p-7 text-white rounded-xl'>
                <div className='flex flex-wrap content-center justify-between'>
                    <h1>Realizado con Tailwind CSS y Next.js como portafolio profesional.</h1>
                    <button type='button' className='bg-white hover:bg-gray-800 transition duration-500 px-4 py-2 text-gray-800 hover:text-white rounded-lg font-semibold'>Página Oficial Tailwind CSS</button>
                </div>
            </div>
        </header>
    )
}
