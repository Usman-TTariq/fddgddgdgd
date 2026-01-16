import { ClientLayout } from "./ClientLayout";
import "./globals.css";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "POSVERGE - POS System & Hardware Solutions",
  description: "POSVERGE - POS System & Hardware Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
