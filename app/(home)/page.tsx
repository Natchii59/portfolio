import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated'

import { homeConfig } from '@/config/home'

export default function HomePage() {
  const posts = allPosts.map(post => ({
    title: post.title,
    description: post.description,
    slug: post.slug
  }))

  return (
    <div className='container'>
      <div className='flex flex-col gap-6 divide-y'>
        <article className='pt-6'>
          <div className='space-y-1'>
            <h2 className='font-heading text-xl'>Articles</h2>
            <p className='text-muted-foreground'>
              Les articles que j&apos;ai écrit.
            </p>
          </div>

          <ul className='space-y-4 pt-4'>
            {posts.map((post, i) => (
              <li key={i}>
                <Link
                  href={post.slug}
                  className='flex flex-col gap-1.5 !no-underline'
                >
                  <span className='font-medium underline underline-offset-4'>
                    {post.title}
                  </span>
                  <span className='text-muted-foreground'>
                    {post.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <article className='pt-6'>
          <div className='space-y-1'>
            <h2 className='font-heading text-xl'>Projets</h2>
            <p className='text-muted-foreground'>
              Les idées que j&apos;ai eu et que j&apos;ai réalisé.
            </p>
          </div>

          <ul className='space-y-4 pt-4'>
            {homeConfig.projects.map((project, i) => (
              <li key={i}>
                <Link
                  href={project.url}
                  className='flex flex-col gap-1.5 !no-underline'
                >
                  <span className='font-medium underline underline-offset-4'>
                    {project.title}
                  </span>
                  <span className='text-muted-foreground'>
                    {project.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <article className='pt-6'>
          <div className='space-y-1'>
            <h2 className='font-heading text-xl'>Liens</h2>
            <p className='text-muted-foreground'>
              Les endroits où vous pouvez me retrouver.
            </p>
          </div>

          <ul className='space-y-4 pt-4'>
            {homeConfig.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link}
                  className='flex flex-col gap-1.5 !no-underline'
                >
                  <span className='font-medium underline underline-offset-4'>
                    {link}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}