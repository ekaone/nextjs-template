export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'NextJS Template',
  description: 'NextJS Template',
  mainNav: [
    {
      title: 'Contact',
      href: '/contact',
      isActive: true
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      isActive: true
    }
  ],
  links: {
    twitter: 'https://twitter.com/twekaone',
    github: 'https://github.com/ekaone/nextjs-template',
    projects: '/project'
  }
}
