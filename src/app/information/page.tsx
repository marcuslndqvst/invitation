import Link from "next/link";
import Image from "next/image";
import astronaut from "../../../public/astronaut.jps.jpeg";

import ".././globals.css";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen justify-between">
      <div className="flex flex-row w-full justify-end">
        <Link href="/">
          <div className="w-full flex justify-end p-3">X</div>
        </Link>
      </div>
      <div className="flex flex-col px-10 gap-3 items-center text-center">
        <h1 className="font-mono">
          välkommen på <span className="text-pink-400 animate-ping">Eden</span>{" "}
          &<span className="text-purple-400 animate-pulse"> Umas</span>{" "}
          rymdkalas
        </h1>
        <p className="font-mono">på stövelvägen 12 i solberga</p>
        <p className="font-mono text-yellow-100">16 mars 13.30-16.00</p>
        <p className="font-mono">vi bjuder på fika!</p>
        <p className="font-mono">osa gärna senast 6 mars</p>
        <p className="font-mono">kom gärna utklädd om du vill</p>
      </div>
      <img className="animate-spin" src="/astro.svg"></img>
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
