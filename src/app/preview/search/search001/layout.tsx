import "./search001.css";

export const metadata = {
  title: "Search 001 Component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 h-full w-full bg-[#06213F] p-0 text-sm leading-snug">
        {children}
      </body>
    </html>
  );
}
