import Image from "next/image";

export default function Home() {
  return (
    <main className="home h-full flex items-center justify-center">
      <div className="home-content flex flex-col items-center text-center">
        <Image width={320} height={320} src="/images/profile-pic.png" className="object-contain" alt="hero-profile-pic" />
        <h4 className="text-2xl pt-8">Front-end Developer</h4>
        <h1 className="text-8xl">Kasun<br /> Lakshitha</h1>
      </div>
    </main>
  )
}
