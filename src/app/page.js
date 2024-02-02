import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      hola!
      <Link href='/login' className="bg-slate-900 text-white">Log in</Link>
      
    </main>
  );
}
