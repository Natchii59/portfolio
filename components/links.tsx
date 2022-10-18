import { useRouter } from 'next/router'
import type { FC } from 'react'

import { links } from '@/lib/datas'
import NextLink from './next-link'

const Links: FC = () => {
  const { asPath } = useRouter()

  return (
    <div className='hidden md:flex items-center gap-4'>
      {links.map((l, i) => (
        <NextLink
          link={{ href: `/${l.slug}` }}
          key={i}
          className={`hover:underline focus-visible:outline-none focus-visible:underline ${
            asPath === `/${l.slug}` ? 'underline decoration-orange-400' : ''
          }`}
        >
          {l.name}
        </NextLink>
      ))}
    </div>
  )
}

export default Links
