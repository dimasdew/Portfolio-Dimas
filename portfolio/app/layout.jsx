import './globals.css'

export const metadata = {
  title: 'Portfolio — UI/UX & Frontend Dev',
  description: 'UI/UX Designer & Frontend Developer based in Indonesia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
