'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import testimonialsData from '@/data/testimonials.json'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Filter featured testimonials for carousel
  const testimonials = testimonialsData.filter(t => t.featured)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // 5 seconds per slide
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, isAutoPlaying, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what engineering leaders are saying 
            about their experience with Minty Labs.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.25, 0.25, 0.75] 
                }}
                className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-6">
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentIndex].initial}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-primary-600 font-medium">
                          {testimonials[currentIndex].title}
                        </div>
                        <div className="text-gray-500">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Industry</div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].industry}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Project Duration</div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].projectDuration}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Team Size</div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].teamSize}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 hover:border-primary-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 hover:border-primary-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isAutoPlaying 
                ? 'bg-primary-100 text-primary-700 hover:bg-primary-200' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/testimonials"
            className="inline-flex items-center border border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors group"
          >
            View All Testimonials
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials