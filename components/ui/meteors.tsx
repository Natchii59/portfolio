import { cn } from '@/lib/utils'

export const Meteors = ({
  number,
  className
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number || 20).fill(true)

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-muted-foreground before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (110 - -10 + 1) + -10) + '%',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's'
          }}
        ></span>
      ))}
    </>
  )
}
