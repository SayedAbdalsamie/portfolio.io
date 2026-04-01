import { motion } from 'framer-motion';
import { AcademicCapIcon, FolderOpenIcon } from '@heroicons/react/24/outline';

const CERTIFICATES_FOLDER_URL =
  'https://drive.google.com/drive/folders/1a2myMJbIRksGZkbbo66QO5rxvlRmjGxa';

const certificates = [
  {
    title: 'AI Internship',
    link: 'https://drive.google.com/file/d/1TxXLed7QiaDBd9uBl9dDGHzoI3pGp2I-/view?usp=drive_link',
    issuer: 'Uneeq Interns',
    date: 'March 2026',
  },
  {
    title: 'AI & Data Scientist Associate',
    link: 'https://drive.google.com/file/d/1eJExPaIZhnHLd0NvHTbl4yyg4GZcL17p/view?usp=drive_link',
    issuer: 'AMIT Learning',
    date: 'October 2025',
  },
  {
    title: 'Data Scientist Associate',
    link: 'https://drive.google.com/file/d/1_lUs_SzCyiCeRfH_0LkbjcV0uQvL8ZHo/view?usp=drive_link',
    issuer: 'DataCamp',
    date: 'February 2025',
  },
  {
    title: 'Microsoft Machine Learning Engineer',
    link: 'https://drive.google.com/file/d/1EqW7cqPnAOTUW8YQIqjxhpK5SM2nbrU8/view?usp=drive_link',
    issuer: 'DEPI (Microsoft Track)',
    date: 'October 2024',
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
          <p className="text-lg text-gray-600 dark:text-textSecondary mb-6">
            Professional certifications and achievements
          </p>
          <a
            href={CERTIFICATES_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-primary font-semibold text-sm shadow hover:bg-secondary/90 transition-colors"
          >
            <FolderOpenIcon className="w-5 h-5" aria-hidden />
            All certificates (Google Drive)
          </a>
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
              className="block p-6 bg-white dark:bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
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
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {cert.date}
                  </p>
                  <span className="text-xs text-secondary font-medium">
                    View PDF on Drive →
                  </span>
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