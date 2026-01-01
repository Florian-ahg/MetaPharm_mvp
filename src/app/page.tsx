import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-green-700 mb-6">🏥 PharmaBenin</h1>
      <p className="text-xl mb-8">Bienvenue sur le MVP.</p>
      <div className="flex gap-4">
        <Link href="/search">
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            Trouver un médicament
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button variant="outline">Espace Pharmacien</Button>
        </Link>
      </div>
    </div>
  );
}