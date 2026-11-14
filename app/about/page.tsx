import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0512] px-6 md:px-10 pt-28 pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a software engineering student with a strong interest in building
            practical, real-world applications using modern web technologies.
            My focus is on developing clean, scalable, and maintainable systems
            that solve real business problems.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I have hands-on experience working with Node.js , Laravel/PHP on the backend and
            modern frontend frameworks such as Next.js , Javascripts and React. Through
            personal and academic projects, I have built systems including
            management platforms, e-commerce-style applications, and service-based
            solutions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I am continuously improving my skills, learning best practices in
            full-stack development, and preparing for real-world software
            engineering environments where teamwork, problem-solving, and
            adaptability are essential.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              PulseDev
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              Full-Stack Development
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              Node.js & Next.js
            </span>
          </div>
        </div>

        {/* Tech Visual Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full transition-all duration-500 group-hover:bg-purple-600/30"></div>

          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/40">
            <Image
              src="/images/tech-hero.jpg"
              alt="Engineering Tech Architecture"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-400 font-mono font-semibold">Tech Architecture</p>
                <p className="text-sm text-white font-medium">Modular Full-Stack Systems</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-mono text-gray-300">Live</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
