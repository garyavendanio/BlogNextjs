import Link from 'next/link'

export default function Post({post}) {
    return (
        <div>
            <img src={post.frontmatter.cover_image} width='500' alt='' />
            <p>{post.frontmatter.title}</p>
            <small>Fecha de publicación: {post.frontmatter.date}</small>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Leer más</Link>
        </div>
    )
}