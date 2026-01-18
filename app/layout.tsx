import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pepijn van der Knaap | Custom Software Development',
  description: 'Professional software developer specializing in custom web applications, business process automation, and tailor-made software solutions.',
  keywords: ['software development', 'web applications', 'business automation', 'custom software', 'Pepijn van der Knaap'],
  authors: [{ name: 'Pepijn van der Knaap' }],
  openGraph: {
    title: 'Pepijn van der Knaap | Custom Software Development',
    description: 'Professional software developer specializing in custom web applications, business process automation, and tailor-made software solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
