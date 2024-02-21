import Image from 'next/image'
import GraphQLIconDark from '@/assets/stacks/graphql-dark.svg'
import GraphQLIconLight from '@/assets/stacks/graphql-light.svg'
import NestjsIconDark from '@/assets/stacks/nestjs-dark.svg'
import NestjsIconLight from '@/assets/stacks/nestjs-light.svg'
import NextjsIconDark from '@/assets/stacks/nextjs-dark.svg'
import NextjsIconLight from '@/assets/stacks/nextjs-light.svg'
import PrismaIcon from '@/assets/stacks/prisma.svg'
import ReactIconDark from '@/assets/stacks/react-dark.svg'
import ReactIconLight from '@/assets/stacks/react-light.svg'
import TypescriptIcon from '@/assets/stacks/typescript.svg'

export function FavoriteStack() {
  return (
    <div className='flex gap-2'>
      <Image src={TypescriptIcon} alt='Typescript' className='size-12' />

      {/* React */}
      <Image
        src={ReactIconDark}
        alt='Typescript'
        className='hidden size-12 dark:block'
      />
      <Image
        src={ReactIconLight}
        alt='Typescript'
        className='size-12 dark:hidden'
      />

      {/* Nextjs */}
      <Image
        src={NextjsIconDark}
        alt='Typescript'
        className='hidden size-12 dark:block'
      />
      <Image
        src={NextjsIconLight}
        alt='Typescript'
        className='size-12 dark:hidden'
      />

      {/* Nestjs */}
      <Image
        src={NestjsIconDark}
        alt='Typescript'
        className='hidden size-12 dark:block'
      />
      <Image
        src={NestjsIconLight}
        alt='Typescript'
        className='size-12 dark:hidden'
      />

      {/* GraphQL */}
      <Image
        src={GraphQLIconDark}
        alt='Typescript'
        className='hidden size-12 dark:block'
      />
      <Image
        src={GraphQLIconLight}
        alt='Typescript'
        className='size-12 dark:hidden'
      />

      <Image src={PrismaIcon} alt='Typescript' className='size-12' />
    </div>
  )
}
