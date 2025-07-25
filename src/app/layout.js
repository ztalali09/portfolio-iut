import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '../components/ClientLayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zakaria Talali Portfolio',
  description: 'Fullstack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.setProperty(
                '--scrollbar-width',
                (window.innerWidth - document.documentElement.clientWidth) + 'px'
              );
            `,
          }}
        />
      </head>
      <ClientLayout interClass={inter.className}>{children}</ClientLayout>
    </html>
  )
}
