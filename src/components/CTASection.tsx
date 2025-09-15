import { ArrowRight, Clock } from 'lucide-react'

const CTASection = () => {
  const steps = [
    { number: "1", text: "Share requirements" },
    { number: "2", text: "Review candidates" }, 
    { number: "3", text: "Start in days" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tell us what you're building—get your shortlist in 48 hours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No lengthy interviews. No hiring overhead. Just vetted engineers ready to contribute from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              Get a tailored shortlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="border border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book a call
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{step.text}</span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-6 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <Clock className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">
              Guaranteed response within 
            </span>
            <span className="ml-1 text-sm font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              48 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection