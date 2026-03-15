import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Boo Baby - Privacy & Terms",
  description: "Privacy Policy and Terms of Use for Boo Baby App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
