import { readFileSync } from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'

const PATH = join(process.cwd(), 'markdown', 'professional')

interface Details {
  content: string
  meta: DetailsMeta
}

export interface DetailsMeta {
  slug: string
  title: string
  year: string
  today: boolean
  sort: number
  description: string
}
export interface DetailsSerialize {
  meta: Details['meta']
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
}

type GetAllSlugs = () => string[]

type GetDetailsFromSlug = (slug: string) => Details

type GetAllDetails = () => Promise<DetailsSerialize[]>

export const getAllSlugs: GetAllSlugs = () => {
  const paths = sync(`${PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const file = parts[parts.length - 1]
    const [slug, _ext] = file.split('.')
    return slug
  })
}

export const getDetailsFromSlug: GetDetailsFromSlug = (slug) => {
  const path = join(PATH, `${slug}.mdx`)
  const source = readFileSync(path)
  const { data, content } = matter(source)

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      year: data.year ?? '',
      today: data.today ?? true,
      sort: data.sort ?? 0,
      description: data.description ?? ''
    }
  }
}

export const getAllDetails: GetAllDetails = async () => {
  const rawDetails = getAllSlugs()

  const details = await Promise.all(
    rawDetails.map(async (slug) => {
      const detail = getDetailsFromSlug(slug)
      const source = await serialize(detail.content)

      return {
        meta: detail.meta,
        source
      }
    })
  )

  return details.sort((a, b) => b.meta.sort - a.meta.sort)
}
