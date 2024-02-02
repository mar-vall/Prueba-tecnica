import Link from "next/link";

export default function Home() {
  return (
    <main className="container py-4 flex justify-center">
      hola!
      <Link href='/login' className="bg-slate-900 p-3 m-3 rounded-md text-white">Sign in</Link>
      <Link href='/register' className="bg-slate-900 text-white p-3 m-3 rounded-md">Sign up</Link>      
    </main>
  );
}
