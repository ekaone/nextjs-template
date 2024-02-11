export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'NextJS Template',
  description: 'NextJS Template',
  mainNav: [
    {
      title: 'Contact',
      href: '/contact'
    }
  ],
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    projects: '/project'
  }
}
