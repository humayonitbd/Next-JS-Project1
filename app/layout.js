import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"],weight:'400' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>
          <ul className="flex gap-6">
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/blog">Blogs</Link></li>
            <li> <Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
        <footer className="mt-10">Footer page</footer>
      </body>
    </html>
  );
}
