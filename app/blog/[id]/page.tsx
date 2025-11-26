import Link from 'next/link'

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  // pre-render first 10 posts to avoid building thousands
  return posts.slice(0, 10).map((p: any) => ({ id: p.id.toString() }))
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
  if (!res.ok) return <div className="card">Post not found</div>
  const post = await res.json()

  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, { next: { revalidate: 60 } })
  const author = await userRes.json()

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.body}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Author: {author.name}</p>
      <Link href="/blog" className="text-blue-500 mt-4 inline-block">Back to Blog</Link>
    </div>
  )
}
