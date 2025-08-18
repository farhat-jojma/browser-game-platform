import Link from "next/link";
import Image from "next/image";

export default function SimpleGameCard({ game }) {
  return (
    <Link
      href={game.url || "#"}
      className="group block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition"
    >
      <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-700">
        <Image src={game.image} alt={game.title} fill className="object-cover" />
      </div>
      <div className="p-3">
        {game.genre && <div className="text-xs uppercase tracking-wide text-white/60">{game.genre}</div>}
        <h3 className="mt-1 font-semibold">{game.title}</h3>
      </div>
    </Link>
  );
}
