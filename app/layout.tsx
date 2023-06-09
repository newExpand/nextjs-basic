import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <div className="p-5 bg-white">
                    <Link className="mr-3 text-black no-underline" href="/">
                        홈
                    </Link>
                    <Link className="mr-3 text-black no-underline" href="/list">
                        List
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
