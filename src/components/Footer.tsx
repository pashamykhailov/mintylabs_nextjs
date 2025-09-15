import { Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    "Services": [
      "Frontend Development",
      "Backend Development", 
      "Full-stack Development",
      "Mobile Development",
      "DevOps & Cloud",
      "Data & AI Engineering"
    ],
    "Company": [
      "About Us",
      "How We Work",
      "Case Studies",
      "Careers",
      "Contact"
    ],
    "Resources": [
      "Blog",
      "Hiring Guide",
      "Tech Insights",
      "Success Stories",
      "Documentation"
    ],
    "Legal": [
      "Privacy Policy",
      "Terms of Service", 
      "Cookie Policy",
      "GDPR Compliance"
    ]
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-semibold">Minty Labs</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Scale your engineering team with vetted talent—without the hiring chaos. 
              From a single specialist to a dedicated squad, ready within days.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400 flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in San Francisco
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Minty Labs. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                🔒 SOC2 Type II Compliant
              </div>
              <div className="text-gray-400 text-sm">
                🛡️ GDPR Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Next.js Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-xs">
            <span>Powered by</span>
            <span className="text-primary-400 font-medium">Next.js ⚡</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer