import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Filter, Building, Clock, Users, TrendingUp } from 'lucide-react'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import caseStudiesData from '@/data/caseStudies.json'

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(caseStudiesData.map(cs => cs.category))]
    return uniqueCategories
  }, [])

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudiesData.filter(caseStudy => {
      const categoryMatch = selectedCategory === 'all' || caseStudy.category === selectedCategory
      const searchMatch = searchTerm === '' || 
        caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchTerm])

  return (
    <>
      <Head>
        <title>Case Studies - Minty Labs</title>
        <meta name="description" content="Explore our portfolio of successful projects. See how we've helped teams scale, innovate, and deliver exceptional products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients. Explore our portfolio of successful projects and see how we've helped teams scale, innovate, and deliver exceptional products.
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
                <span className="text-gray-700 font-medium">Filter & Search:</span>
              </div>

              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-500">
                Showing {filteredCaseStudies.length} of {caseStudiesData.length} case studies
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="block"
                  >
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                            {study.featured && (
                              <span className="inline-block bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
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

                          <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                            Read Full Case Study
                            <ArrowRight className="ml-2 w-4 h-4" />
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
                                  {study.testimonial.title} • {study.testimonial.company}
                                </div>
                              </div>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">
                  No case studies match your current search and filters
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results for your project.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CaseStudiesPage