import './global.css';

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'SudoSchool Manager',
  description: 'Manage your schools from one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
