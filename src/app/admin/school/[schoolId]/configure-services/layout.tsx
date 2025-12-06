import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configure Services',
};

export default function ConfigureServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
