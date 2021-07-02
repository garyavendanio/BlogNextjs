import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='bg-gray-200 p-6 text-gray-600 hover:text-gray-800'>
                <Link href='/' passHref>
                    <div className='font-semibold'>Recursos</div>
                </Link>
            </div>
        </header>
    )
}
