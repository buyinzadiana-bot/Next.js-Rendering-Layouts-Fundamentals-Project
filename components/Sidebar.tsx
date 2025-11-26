'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Sidebar() {
const [query, setQuery] = useState('')
const [posts, setPosts] = useState<any[]>([])


useEffect(() => {
// small client-side search source; this is purely optional and lightweight
fetch('https://jsonplaceholder.typicode.com/posts')
.then(r => r.json())
.then(data => setPosts(data.slice(0, 100)))
}, [])


const filtered = posts.filter(p => p.title.includes(query) || p.body.includes(query))


return (
<div className="card sticky top-6">
<h3 className="font-semibold text-lg">Categories</h3>
<ul className="mt-2 space-y-1">
<li>Tech</li>
<li>Lifestyle</li>
<li>Education</li>
</ul>


<div className="mt-4">
<label className="block text-sm font-medium">Search posts</label>
<input
value={query}
onChange={e => setQuery(e.target.value)}
placeholder="Search titles or body"
className="w-full mt-2 p-2 rounded-md border"
/>
</div>


{query && (
<div className="mt-4">
<h4 className="text-sm font-medium">Results</h4>
<ul className="mt-2 max-h-48 overflow-auto text-sm space-y-1">
{filtered.slice(0, 8).map(p => (
<li key={p.id}>
<Link href={`/blog/${p.id}`} className="underline">{p.title.slice(0, 60)}</Link>
</li>
))}
{filtered.length === 0 && <li className="text-gray-500">No results</li>}
</ul>
</div>
)}
</div>
)
}