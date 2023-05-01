import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'

import '@/styles/mdx.css'
import { Metadata } from 'next'

import { PostsPageHeader } from '@/components/post-page-header'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params
}: DocPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params })

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description
    }
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/')
  }))
}

export default async function PostPage({ params }: DocPageProps) {
  const post = await getPostFromParams({ params })

  if (!post) {
    notFound()
  }

  return (
    <>
      <PostsPageHeader heading={post.title} text={post.description} />
      <div className='py-8'>
        <Mdx code={post.body.code} />
      </div>
    </>
  )
}
