import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <div tw='dark'>
          <div tw='h-full bg-background'>
            <div tw='relative flex size-full items-center bg-dot-white/[0.2]'>
              <div tw='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:linear-gradient(to_bottom,transparent_30%,black)]' />

              <div tw='container relative z-20'>
                <h1 tw='bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-7xl font-bold text-transparent'>
                  hi, i&apos;m natchi.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
