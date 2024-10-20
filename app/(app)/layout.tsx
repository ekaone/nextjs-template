import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { PHProvider } from './providers'

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

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider>
      <div
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className='relative flex min-h-screen flex-col'>
          <SiteHeader />
          <div className='flex-1'>{children}</div>
        </div>
        <TailwindIndicator />
        <GoogleAnalytics gaId='G-PVY8F2TSGL' />
      </div>
    </PHProvider>
  )
}
