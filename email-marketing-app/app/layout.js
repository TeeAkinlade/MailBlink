import { Poppins } from "next/font/google";
import "/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "MailBlink - One-stop Email Marketing Services",
  description: "Email and SMS Marketing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="font-poppins min-h-screen bg-secondary">
          {children}
        </body>
    </html>
  );
}
