import { Metadata } from "next";

const metadata : Metadata = {
  title : 'sign-up'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <main>
      {children}
    </main>
  )
}