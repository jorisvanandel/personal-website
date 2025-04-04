'use client'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-foreground">
                    Joris van Andel
                </Link>
                <TextEffect
                    as="p"
                    preset="fade"
                    per="char"
                    className="text-muted-foreground"
                    delay={0.5}
                >
                    Full-stack Software Engineer
                </TextEffect>
            </div>
        </header>
    )
}