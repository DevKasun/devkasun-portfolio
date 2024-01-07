import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from './componets/footer/footer';
import Header from './componets/header/header';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata = {
  title: 'DevKasun',
  description: 'DevKasun - Portfolio and Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`min-h-full ${poppins.className}`}>
      <body className="h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
