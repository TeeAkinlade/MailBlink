import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Email marketing Website',
  description: 'An Email amrketing platform for Digistem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-poppins min-h-screen bg-secondary'>{children}</body>
    </html>
  )
}
