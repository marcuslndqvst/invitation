import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly min-h-screen background-image-space">
      <Video />
      <Link href="/information" className="animate-pulse">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-20 py-6 bg-transparent ring-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-yellow font-mono">info</p>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}

function Video() {
  return (
    <video height={500} width={320} autoPlay controls preload="auto">
      <source src="/rymdkalas.mov" type="video/mp4" />
      Your browser does not support the video tag. See it{" "}
      <a href="https://youtube.com/shorts/09MaF-XXFsk?si=6lT_99LAI96Vn7hL">
        here
      </a>{" "}
      instead!
    </video>
  );
}
