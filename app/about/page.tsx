export const dynamic = 'force-dynamic'


export default async function About() {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { cache: 'no-store' })
const author = await res.json()


return (
<div className="card">
<h1 className="text-2xl font-bold">About the Author</h1>
<p className="mt-2">This page uses <strong>Server-Side Rendering (SSR)</strong> to fetch author data on each request.</p>


<dl className="mt-4">
<dt className="font-semibold">Name</dt>
<dd>{author.name}</dd>


<dt className="font-semibold mt-2">Email</dt>
<dd>{author.email}</dd>


<dt className="font-semibold mt-2">Company</dt>
<dd>{author.company?.name}</dd>
</dl>


<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Deployed link: add your deployment URL in the repository About section.</p>
</div>
)
}