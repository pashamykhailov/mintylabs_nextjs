import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react'
import axios from 'axios'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    techStack: '',
    seniority: '',
    timeZone: '',
    startDate: '',
    description: '',
    consent: false
  })

  const [submissionStatus, setSubmissionStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionStatus('loading')
    setMessage('')

    try {
      const response = await axios.post('/api/leads', formData)

      if (response.data.success) {
        setSubmissionStatus('success')
        setMessage(response.data.message)
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          company: '',
          role: '',
          techStack: '',
          seniority: '',
          timeZone: '',
          startDate: '',
          description: '',
          consent: false
        })
      } else {
        setSubmissionStatus('error')
        setMessage(response.data.message || 'Произошла ошибка при отправке формы')
      }
    } catch (error: any) {
      setSubmissionStatus('error')
      setMessage(error.response?.data?.message || 'Произошла ошибка при отправке формы. Попробуйте еще раз.')
      console.error('Form submission error:', error)
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setSubmissionStatus('idle')
      setMessage('')
    }, 5000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full-stack Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'Data/AI Engineer',
    'QA Engineer',
    'Dedicated Squad'
  ]

  const seniorityLevels = [
    'Junior (1-3 years)',
    'Mid-level (3-5 years)',
    'Senior (5+ years)',
    'Tech Lead',
    'Architect'
  ]

  const timeZones = [
    'EST (Eastern)',
    'CST (Central)',
    'MST (Mountain)',
    'PST (Pacific)',
    'CET (Central European)',
    'GMT (Greenwich Mean)'
  ]

  const isSubmitDisabled = !formData.consent || !formData.fullName || !formData.email || !formData.company || !formData.role || !formData.seniority || submissionStatus === 'loading'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Your Tailored Shortlist
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your needs and we'll send you a curated list of engineers
                within 48 hours. No commitment required.
              </p>
            </div>

            {/* Status Messages */}
            {submissionStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-medium">Заявка отправлена!</p>
                  <p className="text-green-700 text-sm">{message}</p>
                </div>
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">Ошибка отправки</p>
                  <p className="text-red-700 text-sm">{message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Requirements
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role(s) Needed *</label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={submissionStatus === 'loading'}
                >
                  <option value="">Select role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="techStack" className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
                <input
                  id="techStack"
                  type="text"
                  value={formData.techStack}
                  onChange={(e) => handleInputChange('techStack', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., React, Node.js, Python"
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="seniority" className="block text-sm font-medium text-gray-700 mb-1">Seniority Level *</label>
                <select
                  id="seniority"
                  value={formData.seniority}
                  onChange={(e) => handleInputChange('seniority', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={submissionStatus === 'loading'}
                >
                  <option value="">Select seniority</option>
                  {seniorityLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Zone</label>
                  <select
                    id="timeZone"
                    value={formData.timeZone}
                    onChange={(e) => handleInputChange('timeZone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    disabled={submissionStatus === 'loading'}
                  >
                    <option value="">Select time zone</option>
                    {timeZones.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Start Date</label>
                  <input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={4}
                  placeholder="Tell us about your project, goals, and what you're looking to achieve..."
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  disabled={submissionStatus === 'loading'}
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to Minty Labs processing my data for recruitment purposes and agree to the{' '}
                  <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitDisabled}
              >
                {submissionStatus === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Отправка...
                  </>
                ) : submissionStatus === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Отправлено!
                  </>
                ) : (
                  'Get My Shortlist'
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <a href="mailto:hello@mintylabs.com" className="text-primary-600 hover:underline">
                    hello@mintylabs.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <a href="tel:+15551234567" className="text-primary-600 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Headquarters</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>

                <div className="pt-4 border-t border-primary-100">
                  <button className="w-full border border-primary-200 text-primary-700 hover:bg-primary-50 py-3 rounded-lg font-medium transition-colors">
                    Book a 15-min Call
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-primary-600 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">48 Hours</h4>
                  <p className="text-sm text-gray-600">Response Guarantee</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                We'll review your requirements and send you a tailored shortlist of
                pre-vetted engineers within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm