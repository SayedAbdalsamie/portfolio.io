import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Sentiment Analysis',
    description: 'A real-time sentiment analysis application that can analyze the emotional tone of text input. Built using Python and Streamlit, it provides instant feedback on the sentiment of any given text.',
    demoLink: 'https://sentimentanalysis-sayed.streamlit.app/',
    githubLink: null,
  },
  {
    title: 'Facial Expression Recognition',
    description: 'An advanced computer vision application that can detect and classify human facial expressions in real-time. Using deep learning models to accurately identify emotions from facial features.',
    demoLink: 'https://emotion-recognition1.streamlit.app/',
    githubLink: null,
  },
  {
    title: 'Car Crash Classification',
    description: 'A machine learning project that classifies car crash severity based on various parameters. Implemented using computer vision and deep learning techniques to analyze crash scenarios.',
    demoLink: null,
    githubLink: 'https://github.com/SayedAbdalsamie/DEPI_CarCresh.git',
  },
  {
    title: 'Compliment Classifier',
    description: 'A web app that classifies compliments using machine learning. Built with Python and deployed at compliment-classifier.vercel.app.',
    demoLink: 'https://compliment-classifier.vercel.app/',
    githubLink: 'https://github.com/SayedAbdalsamie/Compliment-Classifier',
  },
];

const DEFAULT_SHOWN = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, DEFAULT_SHOWN);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-textPrimary mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-textSecondary mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Live Demo
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                    >
                      GitHub
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {projects.length > DEFAULT_SHOWN && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 rounded-lg bg-secondary text-primary font-semibold shadow hover:bg-secondary/80 transition-colors"
            >
              {showAll ? 'Show Less' : 'See All'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 