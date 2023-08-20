import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
       <head>
      <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1326277437046150"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
      </head>
      <body className="max-w-screen-2xl mx-auto pt-28">{children}</body>
    </html>
  )
}
