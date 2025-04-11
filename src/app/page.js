"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGoToCounter = () => {
    router.push("counter")

  }
  return (
    <div className="ml-10">
      <h1 className="text-2xl">NextApp1 Home Page</h1>
      <Link href='dashboard'>
        <button className="bg-gray-100 text-black p-2">Go To Dashboard (Link)</button>
      </Link>

      <button onClick={handleGoToCounter} className="bg-gray-100 text-black p-2 ml-5">Go To Counter (Hook)</button>

      <p className="mt-10">Image Normal</p>
      <img className="h-90" src="https://i.postimg.cc/qB5gB53N/img-9368-topaz-denoise-sharpen.webp"></img>
      <p className="mt-10">NextJS Image</p>
      <Image className="h-90 w-auto" 
        src="https://i.postimg.cc/qB5gB53N/img-9368-topaz-denoise-sharpen.webp"
        width={400}
        height={400}
        alt="Image"
        
      ></Image>

    </div>
  );
}
