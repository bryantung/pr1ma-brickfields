import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center container mx-auto p-8 md:p-24">
      <p>
        Under constructions
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        <Image
          className="rounded-md drop-shadow-md"
          src={`/pr1ma-brickfields/ariel-shot-2024-01_01.png`}
          alt={`cover 1`}
          width={380}
          height={360}
        />
        <Image
          className="rounded-md drop-shadow-md"
          src={`/pr1ma-brickfields/ariel-shot-2024-01_02.png`}
          alt={`cover 2`}
          width={380}
          height={360}
        />
      </div>
      <div className="mt-4">
        <Image
          className="rounded-md drop-shadow-md"
          src={`/pr1ma-brickfields/timeline-estimated.png`}
          alt={`estimated timeline`}
          width={720}
          height={500}
        />
      </div>
    </main>
  );
}
