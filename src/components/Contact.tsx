import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: <EnvelopeIcon className="w-6 h-6" />,
      link: 'mailto:abonars30@gmail.com',
      text: 'abonars30@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      link: 'https://github.com/Sayedabdalsamie',
      text: '@Sayedabdalsamie',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/sayed-mohammed-085a94253/',
      text: 'Sayed Mohammed',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-secondary mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-textPrimary mb-2">
                {contact.name}
              </h3>
              <p className="text-gray-600 dark:text-textSecondary text-center">
                {contact.text}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-textSecondary">
            Note: My resume is private and only accessible upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 