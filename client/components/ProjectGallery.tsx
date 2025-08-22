interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "ai-research",
    title: "Exploring AI's impact on divergent thinking and design fixation in UX Design",
    subtitle: "The University of Queensland | AI Researcher in UX Design | 2025",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/97d96a9c097a56051af9919fffe60363268ca844?width=2280",
    featured: true
  },
  {
    id: "clofio",
    title: "SaaS Platform for Cloud Cost Optimization",
    subtitle: "Clofio | UX Designer | 2023-24",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3279be560cef0f450db7ec0319606c329bc10231?width=1100"
  },
  {
    id: "pluto",
    title: "Pluto: Smart Budgeting Made Simple",
    subtitle: "The University of Queensland | Product Designer | 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/62daafeb1c54ed820329b31d7c3f9cc90984f6a5?width=1100"
  },
  {
    id: "livewell",
    title: "LiveWell: An inclusive Wellness platform",
    subtitle: "UQ | Product Designer | UX Design & Frontend | 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/bc2d16d13a02ee7dcfa7cd8720f586725295b04b?width=1100"
  },
  {
    id: "preloved",
    title: "Pre-Loved: A sustainable fashion app",
    subtitle: "Kaarwan | UX/UI Designer | 2023",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2fc589857b044af877b8dc17c60c30b2f3f47803?width=1100"
  }
];

function ProjectCard({ project }: { project: Project }) {
  const handleProjectClick = () => {
    console.log(`Opening ${project.title} project`);
  };

  return (
    <div 
      className={`group cursor-pointer ${
        project.featured 
          ? 'col-span-1 lg:col-span-2' 
          : 'col-span-1'
      }`}
      onClick={handleProjectClick}
    >
      <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              project.featured 
                ? 'h-64 sm:h-80 lg:h-[450px]' 
                : 'h-48 sm:h-64 lg:h-[350px]'
            }`}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 ease-in-out"></div>
        </div>
        
        {/* Project Info */}
        <div className="p-4 lg:p-6">
          <h3 className="text-foreground-muted font-medium text-lg sm:text-xl lg:text-2xl xl:text-[24px] leading-tight mb-2 lg:mb-3 group-hover:text-foreground transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-foreground-light text-sm sm:text-base lg:text-[16px] leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section className="w-full bg-background-light py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12 lg:mb-16">
            <ProjectCard project={featuredProject} />
          </div>
        )}
        
        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
