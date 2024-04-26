export const configProjects = [
  {
    title: 'Scroll Infinitely',
    description:
      'This is a lightweight and easy-to-use library that allows you to create infinite scrolling pages with ease. It is built with TypeScript and has no dependencies.',
    href: 'https://github.com/Natchii59/scroll-infinitely'
  },
  {
    title: 'Chable API',
    description:
      'This is a personal project where I have built a GraphQL API using Nest.js and Typescript. It allows users to send messages in channels to groups of people. I use JWT tokens to authenticate users, and for real-time messaging in channels, I have integrated a socket.io server. As for the database, I use PostgreSQL with Prisma. Additionally, I optimize database queries to the maximum by using dataloaders for resolve fields.',
    href: 'https://github.com/Natchii59/chable-api'
  }
]

export type Project = (typeof configProjects)[0]
