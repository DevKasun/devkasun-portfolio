import Image from "next/image";

export default function Home() {
  return (
    <main className="home py-28py-28 flex items-center justify-center">
      <div className="home-content flex flex-col items-center text-center">
        <Image
          width={320}
          height={320}
          src={"/images/profile-pic.png"}
          layout="responsive"
          className="object-contain"
          alt="hero-profile-pic"
        />
        <h4 className="pt-8 text-2xl">Front-end Developer</h4>
        <h1 className="text-8xl">
          Kasun
          <br /> Lakshitha
        </h1>
      </div>
    </main>
  );
}
