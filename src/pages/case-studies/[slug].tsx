import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Clock, Users, CheckCircle, Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import caseStudiesData from '@/data/caseStudies.json'

interface CaseStudy {
  id: string
  category: string
  duration: string
  title: string
  teamSize: string
  challenge: string
  solution: string
  results: Array<{
    metric: string
    label: string
  }>
  testimonial: {
    quote: string
    author: string
    title: string
    company: string
  }
  technologies: string[]
  featured: boolean
  slug: string
}

interface CaseStudyPageProps {
  caseStudy: CaseStudy
}

const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  const relatedCaseStudies = caseStudiesData
    .filter(cs => cs.id !== caseStudy.id && cs.category === caseStudy.category)
    .slice(0, 2)

  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Minty Labs</title>
        <meta name="description" content={caseStudy.challenge} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link 
                href="/case-studies"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {caseStudy.duration}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {caseStudy.teamSize}
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Results Achieved
              </h2>
              <p className="text-lg text-gray-600">
                Measurable impact delivered through strategic engineering excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-4">
                    {result.metric}
                  </div>
                  <div className="text-gray-700 font-medium text-lg">
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  Our Solution
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {caseStudy.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                Cutting-edge tools and frameworks used to deliver exceptional results
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 text-primary-700 px-6 py-3 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-primary-200"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">
                    {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-primary-600 font-medium text-lg">
                    {caseStudy.testimonial.title}
                  </div>
                  <div className="text-gray-600">
                    {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Case Studies
                </h2>
                <p className="text-lg text-gray-600">
                  More success stories from the {caseStudy.category} industry
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="block bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group h-full"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-block bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                        <span className="text-gray-500 text-sm">{study.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {study.challenge}
                      </p>
                      
                      <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                        Read Case Study
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can help you overcome your engineering challenges and deliver exceptional results.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors text-lg"
              >
                Start Your Project
                <CheckCircle className="ml-2 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = caseStudiesData.map((caseStudy) => ({
    params: { slug: caseStudy.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const caseStudy = caseStudiesData.find(cs => cs.slug === params?.slug)

  if (!caseStudy) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      caseStudy
    }
  }
}

export default CaseStudyPage