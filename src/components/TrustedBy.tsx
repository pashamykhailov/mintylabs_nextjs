const TrustedBy = () => {
  const companies = ['TechCorp', 'StartupX', 'InnovateCo', 'BuildLabs']

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by leading teams
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy