import { motion } from 'framer-motion'
import { FaUsers, FaIndustry, FaHandshake, FaChartLine } from 'react-icons/fa'

const DomesticRecruiting = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Local Talent Network',
      description: 'Access to a vast network of pre-screened local professionals across various industries.'
    },
    {
      icon: <FaIndustry />,
      title: 'Industry Expertise',
      description: 'Specialized recruiters with deep understanding of local market dynamics and industry requirements.'
    },
    {
      icon: <FaHandshake />,
      title: 'Personalized Service',
      description: 'Tailored recruitment solutions meeting specific needs of both candidates and employers.'
    },
    {
      icon: <FaChartLine />,
      title: 'Market Insights',
      description: 'Regular updates on local job market trends, salary benchmarks, and industry developments.'
    }
  ]

  return (
    <div className="pt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary text-white py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Domestic Recruiting Solutions</h1>
          <p className="text-xl max-w-2xl">
            Connecting local talent with leading organizations across the country through our extensive network and industry expertise.
          </p>
        </div>
      </motion.div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Domestic Recruiting?</h2>
              <p className="text-gray-600 mb-4">
                With years of experience in the local market, we understand the unique challenges and opportunities in domestic recruitment. Our team of expert recruiters combines industry knowledge with local market insights to deliver exceptional results.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Extensive local network of qualified candidates</li>
                <li>Deep understanding of regional market dynamics</li>
                <li>Customized recruitment strategies</li>
                <li>Comprehensive candidate screening process</li>
                <li>Ongoing support throughout the hiring process</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Domestic Recruiting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DomesticRecruiting