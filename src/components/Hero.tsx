import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-gray-900">Build calmly.</span>{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Deliver faster.
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Scale your engineering team with vetted talent—without the hiring chaos.
            From a single specialist to a dedicated squad, ready within days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              Get a tailored shortlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="text-gray-600 hover:text-gray-900 px-8 py-4 font-semibold text-lg group flex items-center">
              <Play className="mr-2 h-5 w-5 group-hover:text-primary-500 transition-colors" />
              Book a 15-min intro
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                2-5
              </div>
              <div className="text-gray-600 font-medium">Days to start</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Vetted talent</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                4h
              </div>
              <div className="text-gray-600 font-medium">Min overlap</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                10
              </div>
              <div className="text-gray-600 font-medium">Day replacement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero