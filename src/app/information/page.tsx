import Link from "next/link";
import Image from "next/image";
import astronaut from "../../../public/astronaut.jps.jpeg";

import ".././globals.css";

export default function Home() {
  return (
    <div className="bg-black flex flex-col">
      <Link href="/">
        <div className="w-full flex justify-end p-5">X</div>
      </Link>
      <div className="flex flex-col p-24">
        <h1 className="font-mono">Rymdkalas</h1>
        <h2 className="font-mono">var?</h2>
        <p className="font-mono">stövelvägen 12, solberga</p>
        <h2 className="font-mono">när?</h2>
        <p className="font-mono">16 mars 13.30</p>
      </div>
      <Image
        priority
        height="300"
        width="600"
        src={astronaut}
        alt="astronaut"
      />
    </div>
  );
}
