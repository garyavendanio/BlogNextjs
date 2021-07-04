import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Head from 'next/head'

export default function PostPage( {frontmatter: {title, date, cover_image}, slug, content} ) {
    return (
        <span>
            <Link href='/'>Regresar</Link>
            <h1>{title}</h1>
            <small>Fecha de publicación: {date}</small>
            <img src={cover_image} width='70' alt='' />
            <div dangerouslySetInnerHTML={ {__html: marked(content) } }></div>
        </span>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
	//console.log(paths)

    return {
        paths,
		fallback: false,
    }
}

export async function getStaticProps({params: { slug }}) {
	//console.log(slug);
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const  { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
