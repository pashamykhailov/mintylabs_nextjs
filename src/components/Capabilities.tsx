const Capabilities = () => {
  const capabilities = [
    {
      title: "Frontend",
      description: "React, Next.js, Vue, TypeScript",
      technologies: ["React", "Next.js", "Vue", "+2 more"]
    },
    {
      title: "Backend", 
      description: "Node.js, Python, Go, .NET",
      technologies: ["Node.js", "Python", "Go", "+2 more"]
    },
    {
      title: "Mobile",
      description: "React Native, Flutter, iOS, Android", 
      technologies: ["React Native", "Flutter", "Swift", "+1 more"]
    },
    {
      title: "Data/AI",
      description: "Python, RAG, LLM ops, ML pipelines",
      technologies: ["Python", "TensorFlow", "PyTorch", "+2 more"]
    },
    {
      title: "QA & Automation",
      description: "Testing frameworks, CI/CD",
      technologies: ["Jest", "Cypress", "Selenium", "+1 more"]
    },
    {
      title: "DevOps & Cloud", 
      description: "AWS, GCP, Azure, Kubernetes",
      technologies: ["AWS", "GCP", "Azure", "+2 more"]
    },
    {
      title: "Security",
      description: "Penetration testing, compliance",
      technologies: ["OWASP", "SOC2", "GDPR", "+1 more"]
    },
    {
      title: "Full-stack",
      description: "End-to-end development expertise", 
      technologies: ["MERN", "MEAN", "JAMstack", "+1 more"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From frontend wizards to backend architects, we have the right talent 
            for every stage of your development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200 group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {capability.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {capability.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-md hover:bg-primary-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities