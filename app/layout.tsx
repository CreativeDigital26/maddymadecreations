import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://maddymadecreations.com'),
  title: 'Maddy Made Creations | Handcrafted Florals & Event Styling',
  description:
    'Bespoke floral arrangements and event styling by Maddy Made Creations. Wedding florals, seasonal bouquets, wreaths and more — handcrafted with love.',
  openGraph: {
    title: 'Maddy Made Creations',
    description: 'Bespoke floral arrangements and event styling, handcrafted with love.',
    images: ['/flowerarch.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
