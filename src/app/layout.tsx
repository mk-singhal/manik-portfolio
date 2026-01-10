import "./globals.css";

export const metadata = {
  title: "Manik Singhal | Software Engineer",
  description: "Software Engineer specializing in full-stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
