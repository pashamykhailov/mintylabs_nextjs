import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, Filter, Building, Clock, Users } from 'lucide-react'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import testimonialsData from '@/data/testimonials.json'

interface FilterOption {
  label: string
  value: string
}

const TestimonialsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [selectedRating, setSelectedRating] = useState<number>(0)

  // Get unique industries for filter
  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(testimonialsData.map(t => t.industry))]
    return uniqueIndustries.map(industry => ({
      label: industry,
      value: industry.toLowerCase().replace(/\s+/g, '-')
    }))
  }, [])

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    return testimonialsData.filter(testimonial => {
      const industryMatch = selectedIndustry === 'all' || 
        testimonial.industry.toLowerCase().replace(/\s+/g, '-') === selectedIndustry
      const ratingMatch = selectedRating === 0 || testimonial.rating >= selectedRating
      
      return industryMatch && ratingMatch
    })
  }, [selectedIndustry, selectedRating])

  return (
    <>
      <Head>
        <title>Client Testimonials - Minty Labs</title>
        <meta name="description" content="Read what our clients say about working with Minty Labs. Real feedback from engineering leaders across various industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Client Testimonials
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from engineering leaders who have scaled their teams and delivered exceptional products with Minty Labs.
              </p>
            </div>

            <div className="flex justify-center">
              <Link 
                href="/"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filter by:</span>
              </div>

              {/* Industry Filter */}
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Industries</option>
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value={0}>All Ratings</option>
                  <option value={5}>5 Stars</option>
                  <option value={4}>4+ Stars</option>
                  <option value={3}>3+ Stars</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="ml-auto text-sm text-gray-500">
                Showing {filteredTestimonials.length} of {testimonialsData.length} testimonials
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {testimonial.author}
                      </div>
                      <div className="text-primary-600 text-sm font-medium">
                        {testimonial.title}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Industry:</span>
                      <span className="text-gray-900 font-medium">{testimonial.industry}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Duration:
                      </span>
                      <span className="text-gray-900 font-medium">{testimonial.projectDuration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        Team:
                      </span>
                      <span className="text-gray-900 font-medium">{testimonial.teamSize}</span>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="mt-4">
                      <span className="inline-block bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredTestimonials.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">
                  No testimonials match your current filters
                </div>
                <button
                  onClick={() => {
                    setSelectedIndustry('all')
                    setSelectedRating(0)
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TestimonialsPage