import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Revive",
  description: "Property Revive is a property management company that helps you manage your property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}