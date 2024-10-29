import Card from "@/app/Card";
import ButtonRedirect from "@/app/components/ButtonRedirect";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const isAuth = false;

export default function Home() {
    if (!isAuth) {
        redirect('/login'); 
    }
    return (
        <main>
            <Card />
            <h1 className="text-4xl roboto-thin text-center">Test font</h1>
            <div className=" w-[100px] h-[100px] bg-red-300">
                <Image
                    src="https://i.pinimg.com/564x/e7/84/c5/e784c5669cfa7fd9e5c56b6fff5cc3a4.jpg"
                    alt="edu"
                    width={100}
                    height={100}
                    quality={100}
                    className="w-[100px] h-[100px]"
                />
            </div>

            <ul>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/register"}>Register</Link>
                </li>
            </ul>
            <ButtonRedirect />
        </main>
    );
}
