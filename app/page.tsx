import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="text-center">
        Under constructions
      </p>
      <div className="grid md:grid-cols-2 gap-3 place-content-center max-w-4xl mx-auto">
        <Image
          className="rounded-md drop-shadow-md mx-auto"
          src={`/pr1ma-brickfields/ariel-shot-2024-01_01.png`}
          alt={`cover 1`}
          width={380}
          height={360}
        />
        <Image
          className="rounded-md drop-shadow-md mx-auto"
          src={`/pr1ma-brickfields/ariel-shot-2024-01_02.png`}
          alt={`cover 2`}
          width={380}
          height={360}
        />
      </div>
      <div className="flex mt-4 justify-center">
        <Image
          className="rounded-md drop-shadow-md"
          src={`/pr1ma-brickfields/timeline-estimated.png`}
          alt={`estimated timeline`}
          width={720}
          height={500}
        />
      </div>
      <iframe
        className="mt-4 mx-auto rounded-md drop-shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.886289803051!2d101.67846557579907!3d3.124759396850744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d17a0023dc3%3A0x29a0e9ee021a1b19!2sResidensi%20Brickfields!5e0!3m2!1sen!2smy!4v1709474589410!5m2!1sen!2smy"
        width="720"
        height="450"
        style={{
          border: 0
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </>
  );
}
