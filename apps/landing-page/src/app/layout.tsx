import './global.css';

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'SudoSchool - Modern School Management Platform',
  description: 'A complete SaaS platform for managing your educational institution',
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
