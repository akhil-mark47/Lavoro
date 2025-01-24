import { motion } from 'framer-motion'
import { FaGlobeAmericas, FaUsers, FaGlobeAsia } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="h-12 w-12" />,
      title: 'Domestic Recruiting',
      description: 'Expert recruitment solutions for local talent acquisition across industries.',
      link: '/domestic-recruiting'
    },
    {
      icon: <FaGlobeAmericas className="h-12 w-12" />,
      title: 'US Recruiting',
      description: 'Specialized placement services for US-based opportunities and candidates.',
      link: '/us-recruiting'
    },
    {
      icon: <FaGlobeAsia className="h-12 w-12" />,
      title: 'APAC Recruiting',
      description: 'Comprehensive recruitment solutions across the Asia-Pacific region.',
      link: '/apac-recruiting'
    },
  ]

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="btn-primary inline-block text-center"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services