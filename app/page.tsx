import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Residensi PR1MA Brickfields</h1>
      <p>
        Under constructions
      </p>
      <div className="flex gap-3">
        <Image
          src={`/ariel-shot-2024-01_01.png`}
          alt={`cover-1`}
          width={380}
          height={360}
        />
        <Image
          src={`/ariel-shot-2024-01_02.png`}
          alt={`cover-2`}
          width={380}
          height={360}
        />
      </div>
    </main>
  );
}
