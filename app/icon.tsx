import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
          lineHeight: 1,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '0.25rem'
        }}
      >
        n
      </div>
    ),
    { ...size }
  )
}
