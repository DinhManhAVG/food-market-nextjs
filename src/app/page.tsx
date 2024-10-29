"use client";

import Card from "@/app/Card";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Card />
            <h1 className="text-4xl roboto-thin text-center">Test font</h1>
            <div className=" w-[700px] h-[700px] bg-red-300">
                <Image src="https://i.pinimg.com/564x/e7/84/c5/e784c5669cfa7fd9e5c56b6fff5cc3a4.jpg" alt="edu" width={400} height={600} quality={100} className="w-[400px] h-[600px]" />
            </div>
        </main>
    );
}
