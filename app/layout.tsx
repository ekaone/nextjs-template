import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>
        <main>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            themes={['light', 'dark', 'orange', 'rose', 'green', 'blue']}
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
