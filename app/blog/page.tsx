import Link from 'next/link'


export default async function BlogPage() {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await res.json()


return (
<div className="space-y-4">
<h1 className="text-2xl font-bold">Blog</h1>
<p className="text-gray-600 dark:text-gray-300">Static site generation (SSG) listed posts.</p>


<div className="grid gap-4 mt-4">
{posts.slice(0, 12).map((post: any) => (
<article key={post.id} className="card">
<h3 className="font-semibold text-lg">{post.title}</h3>
<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.body.slice(0, 120)}...</p>
<div className="mt-3">
<Link href={`/blog/${post.id}`} className="text-indigo-600 underline">Read more</Link>
</div>
</article>
))}
</div>
</div>
)
}