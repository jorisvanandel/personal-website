'use client'
import Link from 'next/link'

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-foreground">
                    Joris van Andel
                </Link>
                <p className="text-muted-foreground">
                    Full-Stack Software Engineer
                </p>
            </div>
        </header>
    )
}