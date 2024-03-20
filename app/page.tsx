import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <section className='container grid gap-6 py-10'>
      <div className='flex w-full flex-col gap-2 text-center'>
        <h1 className='text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Dedicated to crafting products <br className='hidden sm:inline' />
          with focus on intricate details.
        </h1>
        <p className='text-lg text-muted-foreground'>
          Focuses on JavaScript and Generative AI, makes Web Apps, OSS.
        </p>
      </div>
      <div className='flex items-center justify-center gap-4 py-5'>
        <Link href={siteConfig.links.projects} className={buttonVariants()}>
          Projects
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          href={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
