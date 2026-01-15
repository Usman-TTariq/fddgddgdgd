import { ClientLayout } from "./ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Aivora - AI Agency & Technology React Template",
  description: "Web site created using create-react-app",
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
