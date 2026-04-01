import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const RESUME_PDF = '/sayed-mohammed-resume.pdf';
const RESUME_DOWNLOAD_NAME = 'Sayed-Mohammed-Resume.pdf';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Phone',
      icon: <PhoneIcon className="w-6 h-6" />,
      link: 'tel:+201095937013',
      text: '+20 1095937013',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="h-6 w-6" />,
      link: 'https://wa.me/+201095937013',
      text: 'Chat on WhatsApp',
    },
    {
      name: 'Email',
      icon: <EnvelopeIcon className="w-6 h-6" />,
      link: 'mailto:abonars30@gmail.com',
      text: 'abonars30@gmail.com',
    },
    {
      name: 'Location',
      icon: <MapPinIcon className="w-6 h-6" />,
      link: '#',
      text: 'Zagazig, Al-Sharqia, Egypt',
    },
    {
      name: 'Portfolio',
      icon: <GlobeAltIcon className="w-6 h-6" />,
      link: 'https://portfolio-io-git-main-sayedabdalsamies-projects.vercel.app/',
      text: 'Live site (Vercel)',
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
    <section id="contact" className="section-padding border-t border-white/5 dark:border-secondary/10">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-textPrimary md:text-4xl">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="glass-panel mx-auto mb-10 flex max-w-xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-center sm:gap-6"
        >
          <div className="flex items-center gap-2 text-center sm:text-left">
            <DocumentTextIcon className="h-8 w-8 shrink-0 text-secondary" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-textPrimary">Resume / CV</p>
              <p className="text-xs text-gray-600 dark:text-textSecondary">PDF · preview &amp; download</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold"
            >
              <DocumentTextIcon className="h-5 w-5" aria-hidden />
              Preview CV
            </a>
            <a
              href={RESUME_PDF}
              download={RESUME_DOWNLOAD_NAME}
              className="btn-glow inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold shadow-cyan-500/30"
            >
              <ArrowDownTrayIcon className="h-5 w-5" aria-hidden />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center gap-5"
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-center text-sm font-medium text-gray-600 dark:text-textSecondary md:text-base">
            <RocketLaunchIcon className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
            <span>Open to Work | Internship | Freelance</span>
          </p>
          <a
            href="mailto:abonars30@gmail.com"
            className="btn-glow inline-flex items-center gap-2 px-10 py-3 text-base shadow-cyan-500/35"
          >
            <EnvelopeIcon className="h-5 w-5" aria-hidden />
            Contact Me
          </a>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target={contact.link === '#' ? undefined : "_blank"}
              rel={contact.link === '#' ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card flex flex-col items-center p-6 transition-shadow hover:shadow-lg ${contact.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
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
          <p className="text-sm text-gray-600 dark:text-textSecondary">
            CV is available above as PDF · Last updated with my latest experience and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 