import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import caseStudiesData from '@/data/caseStudies.json'

const CaseStudies = () => {
  const caseStudies = caseStudiesData.filter(study => study.featured)

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped teams scale, 
            innovate, and deliver exceptional products.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-4 h-4 text-primary-600" />
                    <span className="text-primary-600 font-medium">{study.teamSize}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{study.duration}</span>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {study.challenge}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block border border-primary-200 text-primary-700 px-2 py-1 rounded-md text-sm hover:bg-primary-50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                          {result.metric}
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-400">
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      "{study.testimonial.quote}"
                    </p>
                    <footer className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {study.testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {study.testimonial.title}
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies