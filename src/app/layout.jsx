
import './globals.css'
import Head from './head'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
