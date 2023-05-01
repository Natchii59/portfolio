import { cn } from '@/lib/utils'

interface PostsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function PostsPageHeader({
  heading,
  text,
  className,
  ...props
}: PostsPageHeaderProps) {
  return (
    <>
      <div className={cn('space-y-2', className)} {...props}>
        <h1 className='inline-block font-heading text-3xl leading-tight'>
          {heading}
        </h1>
        {text && <p className='text-lg text-muted-foreground'>{text}</p>}
      </div>
    </>
  )
}
