import { HomeConfig } from '@/types'

export const homeConfig: HomeConfig = {
  projects: [
    {
      title: 'memo',
      description:
        'Une application de mémo construite avec Next.js, Next-Auth, Prisma, et PostgreSQL.',
      url: 'https://github.com/Natchii59/memo'
    },
    {
      title: 'chat-app/api',
      description:
        'Une application de chat backend construite avec Node.js, Nestjs, GraphQL, et Socket.io.',
      url: 'https://github.com/Natchii59/chat-api'
    },
    {
      title: 'chat-app/client',
      description:
        'Une application de chat frontend construite avec Node.js, React, Redux, Apollo, et Socket.io.',
      url: 'https://github.com/Natchii59/chat-client'
    }
  ],
  links: [
    'https://twitter.com/Natchi59',
    'https://github.com/Natchii59',
    'https://linkedin.com/in/nathan-caron'
  ]
}
