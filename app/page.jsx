"use client"
import Game from '@/components/Game'
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-100 py-8 gap-4">
      <h1 className="text-4xl text-center text-black">2048 Game</h1>
      <div className="h-[70vh] grid place-items-center">
      <Game />
      </div>
    </main>
  );
}
