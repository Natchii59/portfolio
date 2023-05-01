import Navigation from '@/components/navigation'

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-full flex-col py-8'>
      <header className='container'>
        <Navigation />
      </header>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
