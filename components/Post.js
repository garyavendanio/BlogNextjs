import Link from 'next/link'

export default function Post({post}) {
    return (
        <div>
            <p>{post.frontmatter.title}</p>
            <img src={post.frontmatter.cover_image} width='70' alt='' />
            <small className='text-gray-400'>Fecha de publicación: {post.frontmatter.date}</small>
            <p>{post.frontmatter.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
                <a className='text-gray-500'>Leer más</a>
            </Link>
        </div>
    )
}