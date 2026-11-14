import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen px-6 md:px-10 pt-28 pb-20 bg-cover bg-center relative bg-[#0a0512]"
      style={{
        backgroundImage: "url('/projects-bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-12 text-white">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              darkMode={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
