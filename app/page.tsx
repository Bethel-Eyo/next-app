import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import mountains from "@/public/images/4.jpg";
import { Metadata } from "next";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      <h1 className="font-poppins">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* for local images */}
      <Image src={mountains} alt="mountains wallpaper" />
      {/* for remote image */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="react cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority
      /> */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
