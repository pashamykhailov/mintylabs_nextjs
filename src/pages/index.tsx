import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Stats from '@/components/Stats'
import Capabilities from '@/components/Capabilities'
import HowWeWork from '@/components/HowWeWork'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Minty Labs - Build calmly. Deliver faster.</title>
        <meta name="description" content="Scale your engineering team with vetted talent—without the hiring chaos. From a single specialist to a dedicated squad, ready within days." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <TrustedBy />
        <Stats />
        <Capabilities />
        <HowWeWork />
        <CaseStudies />
        <Testimonials />
        <CTASection />
        <LeadForm />
        <Footer />
      </div>
    </>
  )
}