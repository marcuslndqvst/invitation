import Link from "next/link";
import Image from "next/image";
import astronaut from "../../../public/astronaut.jps.jpeg";

import ".././globals.css";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen justify-between">
      <div className="flex flex-row w-full justify-end">
        <Link href="/">
          <div className="w-full flex justify-end p-5">X</div>
        </Link>
      </div>
      <div className="flex flex-col p-24 gap-3">
        <h1 className="font-mono">välkommen på Edens & Umas rymdkalas</h1>
        <p className="font-mono">på stövelvägen 12, solberga</p>
        <p className="font-mono">16 mars 13.30-16.00</p>
        <p className="font-mono">vi bjuder på fika!</p>
      </div>
      <Image
        width={500}
        height={500}
        src="https://apod.nasa.gov/apod/image/2211/Butterfly_HubbleOstling_3656.jpg"
        alt={""}
        className="w-full"
      />
    </div>
  );
}
