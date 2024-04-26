import Link from 'next/link'

import { Icons } from '@/components/icons'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Meteors } from '@/components/ui/meteors'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { configProjects } from '@/config/projects'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <>
      <div className='relative flex h-screen w-full items-center bg-dot-black/[0.2] dark:bg-dot-white/[0.2]'>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:linear-gradient(to_bottom,transparent_30%,black)]' />

        <div className='container relative z-20'>
          <h1 className='bg-gradient-to-b from-zinc-400 to-zinc-700 bg-clip-text text-4.5xl font-bold text-transparent dark:from-zinc-200 dark:to-zinc-500 sm:text-7xl'>
            hi, i&apos;m natchi.
          </h1>
          <p className='text-xs font-medium text-zinc-700 dark:text-zinc-500 sm:text-sm'>
            A web developer based in Lille, France. I love building things for
            the web.
          </p>
        </div>
      </div>

      <div className='container'>
        <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>About me.</h2>

        <p className='text-sm leading-5 sm:text-base'>
          My name is Nathan, but you can call me Natchi.
          <br />I have been working as a web developer since 2020, passionate
          about web development, and I love learning new things.
          <br />
          Since mid-2022, I have been employed at{' '}
          <a
            href='https://click2buy.com'
            className='underline underline-offset-2'
          >
            Click2Buy
          </a>
          , while concurrently studying at{' '}
          <a
            href='https://www.epitech.eu'
            className='underline underline-offset-2'
          >
            Epitech Lille
          </a>
          .
        </p>
      </div>

      <div className='container pt-20'>
        <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>
          My developper stack.
        </h2>

        <p className='text-sm leading-5 sm:text-base'>
          Specializing more in backend development, I work as a full-stack web
          developer.
          <br />
          My expertise lies in working with the following technologies:
        </p>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          <Card className='relative overflow-hidden'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-xl'>Typescript</CardTitle>
            </CardHeader>
            <CardContent className='min-h-40 text-sm text-muted-foreground'>
              It is my favorite and most used language.
              <br />I use it for both frontend and backend development. I love
              it because it is statically typed and has a great ecosystem.
            </CardContent>

            <Meteors number={16} className='-z-10' />
          </Card>

          <Card className='relative overflow-hidden'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-xl'>React</CardTitle>
            </CardHeader>
            <CardContent className='min-h-40 text-sm text-muted-foreground'>
              I use it for all my frontend projects.
              <br />
              Next.js is my favorite react framework. I love it because it is
              easy to use and the big community.
            </CardContent>

            <Meteors number={16} className='-z-10' />
          </Card>

          <Card className='relative overflow-hidden'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-xl'>Nest.js</CardTitle>
            </CardHeader>
            <CardContent className='min-h-40 text-sm text-muted-foreground'>
              I use it for all my backend projects.
              <br />
              It has the same syntax as Angular, which I love. GraphQL is my
              favorite way to create APIs.
            </CardContent>

            <Meteors number={16} className='-z-10' />
          </Card>
        </div>
      </div>

      <div className='container pt-20'>
        <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>My projects.</h2>

        <Accordion type='single' collapsible className='w-full'>
          {configProjects.map((project, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{project.title}</AccordionTrigger>
              <AccordionContent>
                {project.description}
                <Link
                  href={project.href}
                  className={cn(
                    buttonVariants({ variant: 'link', size: 'none' }),
                    'mt-2 flex justify-start gap-1'
                  )}
                >
                  <span>Github repository</span>
                  <Icons.externalLink className='size-3' />
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}

          <AccordionItem value='item-next'>
            <AccordionTrigger>Why is there no more projects?</AccordionTrigger>
            <AccordionContent>
              I have many other projects, but they are not finished. So I
              decided not to show them.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className='container pb-16 pt-32'>
        <Separator />

        <div className='flex items-center gap-x-4 pt-4'>
          <span className='flex-1 text-sm text-muted-foreground'>
            I loved to build this website &#60;3
          </span>

          <Link
            href={siteConfig.links.github}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'size-8'
            )}
          >
            <Icons.github className='size-4' />
          </Link>

          <ThemeModeToggle className='size-8' classNameIcon='size-4' />
        </div>
      </div>
    </>
  )
}
