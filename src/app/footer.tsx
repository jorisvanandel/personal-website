'use client'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {TextLoop} from "@/components/ui/text-loop";

const THEMES_OPTIONS = [
    {
        label: 'Light',
        id: 'light',
        icon: <SunIcon className="size-4" />,
    },
    {
        label: 'Dark',
        id: 'dark',
        icon: <MoonIcon className="size-4" />,
    },
    {
        label: 'System',
        id: 'system',
        icon: <MonitorIcon className="size-4" />,
    },
]

function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <AnimatedBackground
            className="pointer-events-none rounded-lg bg-muted"
            defaultValue={theme}
            transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
            }}
            enableHover={false}
            onValueChange={(id) => {
                setTheme(id as string)
            }}
        >
            {THEMES_OPTIONS.map((theme) => {
                return (
                    <button
                        key={theme.id}
                        className="inline-flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-foreground"
                        type="button"
                        aria-label={`Switch to ${theme.label} theme`}
                        data-id={theme.id}
                    >
                        {theme.icon}
                    </button>
                )
            })}
        </AnimatedBackground>
    )
}

export function Footer() {
    return (
        <footer className="mt-24 border-t border-border px-0 py-4">
            <div className="flex items-center justify-between">
                <TextLoop className="text-sm text-muted-foreground">
                    <span>© 2025 Joris van Andel.</span>
                    <span>Made with ❤️ in Amsterdam.</span>
                </TextLoop>
                <div className="text-muted-foreground">
                    <ThemeSwitch />
                </div>
            </div>
        </footer>
    )
}