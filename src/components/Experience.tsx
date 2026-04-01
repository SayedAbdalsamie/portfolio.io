import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'Uneeq Interns',
    period: 'Mar 2026',
    location: 'Remote',
    bullets: [
      'Developed 5 AI applications across computer vision and NLP.',
      'Improved model accuracy to 85–92%.',
      'Reduced RMSE by 20%.',
      'Built real-time systems with ~0.8s latency.',
    ],
  },
  {
    title: 'Data Science & AI Intern',
    company: 'AMIT Learning',
    period: 'Feb 2025 – Oct 2025',
    location: 'Egypt',
    bullets: [
      'Built and evaluated ML and deep learning models for classification and prediction.',
      'Improved performance through feature engineering and optimization.',
      'Delivered end-to-end ML pipelines from preprocessing to evaluation.',
      'Gained hands-on experience in deployment and MLOps practices.',
    ],
  },
  {
    title: 'Machine Learning Engineer Intern (Microsoft Track)',
    company: 'DEPI',
    period: 'Feb 2025 – Oct 2025',
    location: 'Egypt',
    bullets: [
      'Improved model performance by 15–20% via feature engineering and hyperparameter tuning.',
      'Applied deep learning (CNN, NLP, Transformers) in real-world projects.',
      'Strengthened skills in model deployment and MLOps.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-tertiary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Internships and applied AI engineering work
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-primary rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <BriefcaseIcon className="w-8 h-8 text-secondary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary">
                    {job.title}
                  </h3>
                  <p className="text-secondary font-medium">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ''}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-textSecondary mb-3">
                    {job.period}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-gray-600 dark:text-textSecondary text-sm md:text-base"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
