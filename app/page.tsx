import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let name = "Lee";
    let link = "http://google.com";

    return (
        <div>
            <h4 className="text-center mt-[50vh]">SM프레시</h4>
            <p className="text-center">by dev {name}</p>
            <a
                className="block text-center"
                style={{ color: "red", fontSize: "30px" }}
                href={link}
            >
                링크
            </a>
        </div>
    );
}
