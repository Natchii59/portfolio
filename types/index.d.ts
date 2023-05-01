export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
}

export type ProjectItem = {
  title: string
  description: string
  url: string
}

export type HomeConfig = {
  projects: ProjectItem[]
  links: string[]
}
