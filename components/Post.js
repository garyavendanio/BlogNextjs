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
                        <p className='font-semibold'>{post.frontmatter.title}</p>
                        <p>{post.frontmatter.excerpt}</p>
                        <div className='bg-gray-200 w-1/4 text-center p-2 rounded-lg'>
                            <Link href={`/blog/${post.slug}`}>Leer más</Link>
                        </div>
                        <div className='text-sm'>Fecha de publicación: {post.frontmatter.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}