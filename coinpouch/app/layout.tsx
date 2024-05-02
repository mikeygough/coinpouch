import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-black h-screen pt-28">{children}</div>
      </body>
    </html>
  );
}
