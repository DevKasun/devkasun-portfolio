import Image from "next/image";


export default function Blog() {
  return (
    <main className="about py-28">
      <section className="pb-14">
        <div className="container mx-auto px-8">
          <div className="flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-4">
            <Image
              className="col-span-2"
              src={"/images/blog-kv.png"}
              width={1792}
              height={1024}
              alt="developer_image"
            />
            <div className="col-span-2">
              <h2 className="pb-6 text-4xl">The Dev Blog</h2>
              <p className="pb-8 text-lg">
                Welcome to &#34;The Dev Blog - a personal space where I share my
                experiences and discoveries in the world of web development.
                Here, I document my journey, tackling challenges and celebrating
                milestones as I navigate the coding landscape. It&#39;s a mix of
                technical know-how, problem-solving adventures, and the little
                joys of coding. Whether you&#39;re a fellow developer or just
                curious about web development, join me in this journey of
                continuous learning and coding fun!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14">
        <div className="container mx-auto px-8">
        </div>
      </section>
    </main>
  );
}
