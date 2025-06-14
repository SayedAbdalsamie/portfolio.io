import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    title: ' Artificial Intelligence Fundamentals',
    link: 'https://www.credly.com/badges/f6047bfd-0450-44a8-89ef-36ac81e0f7b7',
    issuer: 'IBM SkillsBuild',
  },
  {
    title: 'Deep Learning: CNN Image Classification',
    link: 'https://www.udemy.com/certificate/UC-d4810ac1-fa91-4bf2-a26a-5a9869248bd7/',
    issuer: 'Udemy',
  },
  {
    title: 'Machine Learning A-Z',
    link: 'https://www.udemy.com/certificate/UC-7e174a12-ea52-4cfe-986f-f00207d4c138/',
    issuer: 'Udemy',
  },
  {
    title: 'Other Certificates',
    link: 'https://drive.google.com/drive/folders/1a2myMJbIRksGZkbbo66QO5rxvlRmjGxa',
    issuer: 'Other',
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
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-white dark:bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <AcademicCapIcon className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-textPrimary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-textSecondary">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 