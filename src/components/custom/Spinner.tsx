import React from 'react'
import Image from 'next/image'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full min-h-screen bg-white">
      <div className="relative flex flex-col items-center justify-center space-y-6">
        {/* Spinner Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-pulse" />

          {/* Main Spinner */}
          <div
            className="absolute inset-0 border-4 border-t-4 rounded-full animate-spin"
            style={{
              borderColor: '#0763fe transparent transparent transparent',
              boxShadow: '0 0 25px rgba(7, 99, 254, 0.15)',
            }}
          />

          {/* Secondary Spinner (Counter-rotating) */}
          <div
            className="absolute inset-2 border-2 border-r-2 rounded-full animate-spin"
            style={{
              borderColor: 'transparent #0763fe transparent transparent',
              animationDirection: 'reverse',
              animationDuration: '1.5s',
            }}
          />

          {/* Inner Logo Container */}
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Image
              src="/official.png"
              width={80}
              height={28}
              alt="Logo"
              className="w-auto h-auto max-w-full max-h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
