import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nimsara Fernando',
  description: `Hi, I’m Nimsara Fernando, a CSE undergraduate at the University of Moratuwa. Consider me a passionate software engineering practitioner who seeks innovative software solutions to solve everyday problems and automate tedious tasks. My thirst for new technologies made me build clean, robust, secure, production-ready projects that have put me in an advantageous position among my colleagues. 
  I am the project leader in this semester's software engineering project and am proud to maintain a 3.9+ GPA throughout my academic studies.
  I have brief experience in freelancing and project management and am seeking professional guidance to flourish in this exciting software industry.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/manifest.json?v=1" />
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
