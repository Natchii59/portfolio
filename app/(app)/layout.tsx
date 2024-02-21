import { AppBar } from '@/components/app-bar'
import { Separator } from '@/components/ui/separator'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='container'>
      <AppBar />

      <Separator />

      <main className='pt-4'>{children}</main>
    </div>
  )
}
