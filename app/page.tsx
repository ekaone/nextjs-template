import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Dedicated to crafting products <br className='hidden sm:inline' />
          with focus on intricate details.
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Focuses on JavaScript and Generative AI, makes Web Apps, OSS.
        </p>
      </div>
      <div className='flex gap-4'>
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
