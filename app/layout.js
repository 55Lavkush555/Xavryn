import "./globals.css";

export const metadata = {
  title: "Xavryn",
  description: "Modern Real-Time Chat App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}