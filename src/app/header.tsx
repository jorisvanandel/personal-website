'use client'
import Link from 'next/link'

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-zinc-900">
                    Joris van Andel
                </Link>
                <p className="text-zinc-600">
                    Full-Stack Software Engineer
                </p>
            </div>
        </header>
    )
}