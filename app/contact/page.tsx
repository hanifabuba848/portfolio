import { Mail, Phone, MapPin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0512] px-6 md:px-10 py-28 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            I am open to software engineering opportunities, collaborations, and projects.
            Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            value="hanifabuba6@gmail.com"
            href="mailto:hanifabuba6@gmail.com"
          />

          <ContactCard
            icon={<Github size={24} />}
            title="GitHub"
            value="@hanifabuba848"
            href="https://github.com/hanifabuba848"
          />

          <ContactCard
            icon={<Phone size={24} />}
            title="Phone"
            value="+234 816 414 2131"
            href="tel:+2348164142131"
          />

          <ContactCard
            icon={<MapPin size={24} />}
            title="Location"
            value="Nigeria"
          />
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-gray-900/80 transition duration-300 text-center h-full flex flex-col items-center justify-center group shadow-lg">
      <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="text-base font-semibold text-white mb-1">
        {title}
      </h3>

      <p className="text-gray-400 text-sm break-all group-hover:text-purple-300 transition-colors">
        {value}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
