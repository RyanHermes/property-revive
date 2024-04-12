import Head from 'next/head';
import './global.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Revive" as string,
  description: "Property Revive is a property management company that helps you manage your property." as string,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title || 'Default Title'}</title>
        <meta name="description" content={metadata.description || 'Default Description'} />
      </Head>
      <Header />
        {children}
      <Footer />
    </>
  );
}