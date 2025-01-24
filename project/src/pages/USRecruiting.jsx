import { motion } from 'framer-motion'
import { FaFlag, FaBriefcase, FaUserTie, FaGlobe } from 'react-icons/fa'

const USRecruiting = () => {
  const features = [
    {
      icon: <FaFlag />,
      title: 'US Market Expertise',
      description: 'Deep understanding of US job market, regulations, and business culture.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Coast-to-Coast Coverage',
      description: 'Comprehensive recruitment services across all major US cities and regions.'
    },
    {
      icon: <FaUserTie />,
      title: 'Executive Search',
      description: 'Specialized placement services for senior and executive-level positions.'
    },
    {
      icon: <FaGlobe />,
      title: 'Visa Support',
      description: 'Guidance on work authorization and visa requirements for international candidates.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">US Recruiting Solutions</h1>
          <p className="text-xl max-w-2xl">
            Connecting global talent with leading US organizations through strategic recruitment solutions and market expertise.
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
              <h2 className="text-3xl font-bold mb-6">US Market Specialists</h2>
              <p className="text-gray-600 mb-4">
                Our US recruitment team brings extensive experience in placing talent across various industries in the American market. We understand the unique challenges and opportunities of the US job market and provide comprehensive support throughout the recruitment process.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to top US companies and opportunities</li>
                <li>Understanding of US work culture and expectations</li>
                <li>Expertise in US employment laws and regulations</li>
                <li>Strong network across major US tech hubs</li>
                <li>Support with relocation and visa processes</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="US Recruiting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our US Services</h2>
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

export default USRecruiting