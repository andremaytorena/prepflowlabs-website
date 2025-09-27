'use client'

import { useEffect, useRef } from 'react'

interface CalendlyEmbedProps {
  url: string
  height?: string
}

const CalendlyEmbed = ({ url, height = '700px' }: CalendlyEmbedProps) => {
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex w-full justify-center">
      <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{
          width: '100%',
          maxWidth: '1000px',
          height,
        }}
      ></div>
    </div>
  )
}

export default CalendlyEmbed
