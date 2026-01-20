import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative scroll-mt-16 bg-white p-8 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="p-4 container mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left: Text */}
        <div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Hi, I&apos;m Manik <br /> Software Engineer
          </h1>

          <p className="mb-6 max-w-[42rem] text-gray-600">
            I build scalable backend systems and production-ready web
            applications with a strong focus on performance, reliability, and
            clean architecture.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-800"
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/maniksingal/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-900 transition hover:border-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/dd.svg"
            alt="Developer illustration"
            width={640}
            height={640}
            className="max-w-[540px] w-full"
            priority
          />
        </div>
      </div>
    </header>
  );
}
