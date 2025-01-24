import { motion } from 'framer-motion'
import { FaGlobeAsia, FaHandshake, FaLanguage, FaNetworkWired } from 'react-icons/fa'

const APACRecruiting = () => {
  const features = [
    {
      icon: <FaGlobeAsia />,
      title: 'APAC Coverage',
      description: 'Extensive network across major APAC markets including Singapore, Japan, Australia, and more.'
    },
    {
      icon: <FaHandshake />,
      title: 'Cultural Expertise',
      description: 'Deep understanding of diverse APAC business cultures and practices.'
    },
    {
      icon: <FaLanguage />,
      title: 'Multilingual Support',
      description: 'Recruitment services in multiple Asian languages for better communication.'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Regional Network',
      description: 'Strong connections with leading APAC companies and organizations.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">APAC Recruiting Solutions</h1>
          <p className="text-xl max-w-2xl">
            Bridging talent across the Asia-Pacific region with innovative recruitment solutions and cultural expertise.
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
              <h2 className="text-3xl font-bold mb-6">APAC Market Specialists</h2>
              <p className="text-gray-600 mb-4">
                Our APAC recruitment team brings deep expertise in navigating the diverse markets of the Asia-Pacific region. We understand the unique challenges and opportunities in each market and provide tailored solutions for both candidates and employers.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Presence in major APAC business hubs</li>
                <li>Understanding of local business practices</li>
                <li>Multilingual recruitment teams</li>
                <li>Cross-border placement expertise</li>
                <li>Cultural integration support</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="APAC Recruiting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our APAC Services</h2>
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

export default APACRecruiting