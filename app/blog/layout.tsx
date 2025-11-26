import Sidebar from '../../components/Sidebar'


export const metadata = {
title: 'Blog — NextRender',
}


export default function BlogLayout({ children }: { children: React.ReactNode }) {
return (
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
<aside>
<Sidebar />
</aside>


<section>
{children}
</section>
</div>
)
}