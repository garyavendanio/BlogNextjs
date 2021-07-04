import Link from 'next/link'

export default function Post({post}) {
    return (
        <div className='flex flex-wrap content-center'>
            <div className='h-20 w-1/5'>
                <img className='object-cover rounded-2xl' src={post.frontmatter.cover_image} alt='' />
            </div>
            <div className='h-20 w-auto'>
                <div>
                    <p className='font-semibold'>{post.frontmatter.title}</p>
                    <p>{post.frontmatter.excerpt}</p>
                    <div className='bg-gray-200 w-1/4 text-center p-2 rounded-lg'>
                        <Link href={`/blog/${post.slug}`}>Leer más</Link>
                    </div>
                    <div className='text-sm'>Fecha de publicación: {post.frontmatter.date}</div>
                </div>
            </div>
        </div>
    )
}