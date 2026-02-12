import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bapasitaram Consultant | Engineering Excellence',
  description: 'Professional engineering consulting services delivering innovative solutions with precision and expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
