import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import TextAnimation from '@/components/text-animation'

const TextArray = [
  'NextJS',
  'Generative AI',
  'Tailwind',
  'Typescript',
  'Langchain JS',
  'Llama Index'
]

export default function IndexPage() {
  return (
    <section className='container grid gap-6 py-10'>
      <div className='flex w-full flex-col gap-2 text-center'>
        <h1 className='scroll-m-20 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Crafting products with focus on <br className='hidden sm:inline' />
          <span>
            <TextAnimation words={TextArray} />
          </span>
        </h1>
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
