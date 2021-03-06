import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
	//console.log(posts)
	return (
		<div>
			<div className='text-gray-700'>
				{posts.map((post, index) => (<Post key={index} post={post} />))}
			</div>
		</div>
	)
}

export async function getStaticProps(){
	// Get files from the posts dir
	const files = fs.readdirSync(path.join('posts'))
	console.log(files)

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace('.md', '')

		// Get formatmatter
		const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
		//console.log(markdownWithMeta)

		const { data: frontmatter } = matter(markdownWithMeta)

		return {
			slug,
			frontmatter
		}
	})

	//console.log(posts)
	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	}
}
