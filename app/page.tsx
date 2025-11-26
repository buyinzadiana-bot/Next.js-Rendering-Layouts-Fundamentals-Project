import dynamic from 'next/dynamic'
const Clock = dynamic(() => import('../components/Clock'),)


export default function Home() {
return (
<div className="space-y-6">
<section className="card">
<h1 className="text-3xl font-extrabold mb-2">Welcome to NextRender</h1>
<p className="text-gray-700 dark:text-gray-300">A demo exploring Next.js rendering techniques and nested layouts.</p>
</section>


<section className="card">
<h2 className="text-xl font-semibold mb-3">Live Clock (Client-side)</h2>
<Clock />
</section>
</div>
)
}