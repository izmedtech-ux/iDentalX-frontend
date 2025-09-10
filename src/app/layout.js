import './globals.css'

export const metadata = {
  title: 'Dental SaaS Frontend',
  description: 'Next.js 14 + Azure ready template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}