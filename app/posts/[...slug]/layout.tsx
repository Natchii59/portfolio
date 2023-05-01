export default function PostLayout({ children }: React.PropsWithChildren) {
  return (
    <article className='container relative py-6 lg:py-10'>{children}</article>
  )
}
