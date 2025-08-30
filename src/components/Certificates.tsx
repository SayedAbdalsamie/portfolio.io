import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    title: 'Associate Data Scientist',
    link: '#',
    issuer: 'DataCamp',
    date: 'February 16, 2025',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    link: 'https://www.credly.com/badges/f6047bfd-0450-44a8-89ef-36ac81e0f7b7',
    issuer: 'IBM SkillsBuild',
    date: 'June 10, 2025',
  },
  {
    title: 'Microsoft Machine Learning Engineer',
    link: '#',
    issuer: 'DEPI',
    date: 'April 24 - October 24',
  },
  {
    title: 'Machine Learning & AI Diploma',
    link: '#',
    issuer: 'AMIT',
    date: 'November 24 - September 25',
  },
  {
    title: 'Data Scientist | AI and Machine Learning',
    link: '#',
    issuer: 'ODC with AMIT',
    date: '1 Week Program',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-gray-50 dark:bg-tertiary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Certificates
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-white dark:bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <AcademicCapIcon className="w-8 h-8 text-secondary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-textPrimary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-textSecondary mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </p>
                  {cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-secondary hover:text-secondary/80 transition-colors"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 