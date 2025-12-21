import './global.css';

// Force dynamic rendering for all pages - required for microservices that use server-side data
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Dashboard - School Management',
  description: 'School Management System Admin Dashboard',
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
