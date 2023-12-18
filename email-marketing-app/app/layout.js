import "/styles/globals.css";

export const metadata = {
  title: "MailBlink - One-stop Email Marketing Services",
  description: "Email and SMS Marketing Services",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="relative">
        <main className="">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};
