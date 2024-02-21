import Link from 'next/link'

import { FavoriteStack } from '@/components/favorite-stack'
import { Separator } from '@/components/ui/separator'
import { configProjects } from '@/config/projects'

export default function Home() {
  return (
    <>
      <div className='py-6'>
        <h1 className='mb-4 text-2xl font-medium'>hi, I&apos;m Natchi 👋🏻</h1>

        <p className='text-muted-foreground'>
          At 20 years old, I am a fullstack developer who finds inspiration in
          music while writing lines of code. With a preference for the back-end,
          I discover new technologies and concepts every day to improve my
          skills.
        </p>
      </div>

      <Separator />

      <div className='py-6'>
        <h2 className='mb-4 text-2xl font-medium'>My favorite stack</h2>

        <FavoriteStack />
      </div>

      <Separator />

      <div className='py-6'>
        <h2 className='mb-4 text-2xl font-medium'>My projects</h2>

        {configProjects.map((project, index) => (
          <Link key={index} href={project.href}>
            <h4 className='text-lg font-medium underline underline-offset-2'>
              {project.title}
            </h4>
            <p className='text-muted-foreground'>{project.description}</p>
          </Link>
        ))}

        <p className='mt-4 text-sm italic text-muted-foreground'>
          ...Yeah I know, I don&apos;t have a lot of projects yet, but I&apos;m
          working on it!
        </p>
      </div>
    </>
  )
}
