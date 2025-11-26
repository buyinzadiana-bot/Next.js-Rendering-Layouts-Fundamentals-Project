
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css" assert { type: "css" };

import Link from 'next/link'
import DarkToggle from '@/components/DarkToggle'


export const metadata = {
title: 'Next App Router — Rendering Techniques',
description: 'Demo app for Next.js rendering strategies',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col">
<header className="bg-gradient-to-r from-indigo-500 to-emerald-400 text-white">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<Link href="/" className="font-bold text-xl">NextRender</Link>
<nav className="flex gap-4 items-center">
<NavLink href="/">Home</NavLink>
<NavLink href="/about">About</NavLink>
<NavLink href="/blog">Blog</NavLink>
<DarkToggle />
</nav>
</div>
</header>


<main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
{children}
</main>


<footer className="bg-gray-50 dark:bg-gray-900 border-t py-6">
<div className="max-w-6xl mx-auto px-4 text-sm text-center text-gray-600 dark:text-gray-300">
© {new Date().getFullYear()} NextRender • Built with Next.js App Router • Demo assignment
</div>
</footer>
</body>
</html>
)
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
return (
<Link href={href} className="px-3 py-2 rounded-md hover:bg-white/20 transition">
{children}
</Link>
)
}
