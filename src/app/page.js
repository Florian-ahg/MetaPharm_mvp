import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-extrabold text-green-700 tracking-tight">
          🏥 PharmaBenin
        </h1>
        <p className="text-xl text-gray-600">
          Trouvez la pharmacie de garde la plus proche et commandez vos médicaments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/search" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold">
              🔍 Trouver un médicament
            </Button>
          </Link>
          
          <Link href="/auth/login" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full border-green-200 text-green-800 hover:bg-green-50">
              👨‍⚕️ Espace Pharmacien
            </Button>
          </Link>
        </div>
        
        <div className="pt-8 text-sm text-gray-400">
          <Link href="/admin/login" className="hover:text-gray-600 underline">
            Accès Admin
          </Link>
        </div>
      </div>
    </div>
  );
}