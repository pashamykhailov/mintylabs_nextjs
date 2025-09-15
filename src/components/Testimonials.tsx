import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Minty Labs delivered exactly what we needed—senior engineers who could hit the ground running. Our product launch timeline was aggressive, and they made it happen.",
      author: "Jennifer Walsh",
      title: "VP of Engineering",
      company: "InnovateTech",
      initial: "J"
    },
    {
      quote: "The quality of talent and speed of delivery exceeded our expectations. Within a week, their engineers were contributing meaningful code and architectural decisions.",
      author: "Marcus Chen", 
      title: "CTO",
      company: "FinanceFlow",
      initial: "M"
    },
    {
      quote: "Working with Minty Labs felt like extending our internal team rather than hiring external contractors. The communication and collaboration were seamless.",
      author: "Sofia Rodriguez",
      title: "Head of Product", 
      company: "MedTech Solutions",
      initial: "S"
    }
  ]

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.title}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials