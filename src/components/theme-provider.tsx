"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes relies on localStorage and window.matchMedia, but on first load (SSR), it doesn’t yet know what theme to apply, and renders defaultTheme (dark in your case). Then, on hydration (client), it figures out the actual theme (system, light, etc.), causing a mismatch between server-rendered and client-rendered HTML.

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
     // prevent hydration mismatch
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}