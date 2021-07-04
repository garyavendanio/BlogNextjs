import Link from 'next/link'

export default function Post({post}) {
    return (
        <div className='container mx-auto my-5'>
            <div className='flex flex-wrap content-center'>
                <div className='h-auto'>
                    <img className='object-cover rounded-2xl' src={post.frontmatter.cover_image} width='200' alt='' />
                </div>
                <div className='h-auto flex flex-wrap content-center'>
                    <div className='p-5'>
                        <h1 className='font-semibold'>{post.frontmatter.title}</h1>
                        <div className='text-sm text-gray-500'>Fecha de publicación: {post.frontmatter.date}</div>
                        <p>{post.frontmatter.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <button className='bg-gray-800 text-white rounded-lg px-6 py-2'>
                                Leer más
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}