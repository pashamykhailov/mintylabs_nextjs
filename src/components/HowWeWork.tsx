import { MessageSquare, Users, Zap, TrendingUp } from 'lucide-react'

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "Brief",
      subtitle: "Tell us who you need and why",
      description: "Share your requirements, tech stack, and timeline. We'll understand your project context and team dynamics.",
      icon: MessageSquare
    },
    {
      number: "2", 
      title: "Shortlist",
      subtitle: "Interview 2–4 matching engineers",
      description: "Within 48 hours, receive vetted candidates who match your technical and cultural requirements.",
      icon: Users
    },
    {
      number: "3",
      title: "Trial Sprint", 
      subtitle: "See impact in a week",
      description: "Start with a focused 1-week trial to validate fit and delivery quality before scaling up.",
      icon: Zap
    },
    {
      number: "4",
      title: "Scale",
      subtitle: "Extend, add roles, or spin up a squad", 
      description: "Seamlessly expand your team with additional specialists or build dedicated development squads.",
      icon: TrendingUp
    }
  ]

  return (
    <section id="how-we-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A simple, transparent process designed to get you the right talent quickly 
            and ensure long-term success.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-sm font-medium text-gray-600">
              Average time from brief to first engineer: 
            </span>
            <span className="ml-2 text-sm font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              3.5 days
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <h4 className="text-sm font-medium text-primary-600 mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork