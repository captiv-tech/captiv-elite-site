import "./globals.css";

export const metadata = {
  title: "Captiv",
  description: "Institutional Performance Engineering"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}