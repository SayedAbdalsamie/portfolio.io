import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Integrated City Management System (ICMS)',
    description: 'Graduation Project - Built a smart city app with 3 AI services: complaint classification, anomaly detection, and user support chatbot. Used Flask and Azure, deployed for real-time issue management.',
    demoLink: null,
    githubLink: null,
    isGraduation: true,
  },
  {
    title: 'Sentiment Analysis',
    description: 'Developed NLP model using Scikit-learn with 90% F1-score. Built an interactive web application deployed via Streamlit for real-time sentiment analysis.',
    demoLink: 'https://sentimentanalysis-sayed.streamlit.app/',
    githubLink: null,
  },
  {
    title: 'Emotion Recognition',
    description: 'Designed CNN for facial expressions achieving 85% accuracy. Created an interactive demo application deployed via Streamlit for real-time emotion detection.',
    demoLink: 'https://emotion-recognition1.streamlit.app/',
    githubLink: null,
  },
  {
    title: 'Voyage Management System',
    description: 'Built a desktop application using JavaFX for trip scheduling and management. Features include trip planning, scheduling, and management tools.',
    demoLink: null,
    githubLink: null,
  },
  {
    title: 'Car Crash Classification',
    description: 'Machine learning project that classifies car crash severity based on various parameters. Implemented using computer vision and deep learning techniques.',
    demoLink: null,
    githubLink: 'https://github.com/SayedAbdalsamie/DEPI_CarCresh.git',
  },
  {
    title: 'Compliment Classifier',
    description: 'Web app that classifies compliments using machine learning. Built with Python and deployed for real-time compliment classification.',
    demoLink: 'https://compliment-classifier.vercel.app/',
    githubLink: 'https://github.com/SayedAbdalsamie/Compliment-Classifier',
  },
  {
    title: 'Boston Housing Price Prediction',
    description: 'A machine learning application that predicts the median value of homes in Boston neighborhoods based on key features like average rooms per dwelling, percentage of lower status population, and pupil-teacher ratio. Built with Python and machine learning algorithms.',
    demoLink: null,
    githubLink: null,
  },
  {
    title: 'AI Image Classifier - PyQt5 Application',
    description: 'A modern PyQt5-based GUI application for AI image classification using pre-trained models. Features include modern interface design, support for Keras (.h5/.keras) and ONNX (.onnx) models, image processing with automatic resizing, optional labels support, and real-time prediction with top-5 predictions and confidence scores.',
    demoLink: null,
    githubLink: null,
  },
  {
    title: 'Advanced Edge Detection - Image Processing Tool',
    description: 'A powerful Qt-based application for edge detection with multiple algorithms and real-time parameter adjustment. Built for advanced image processing tasks with interactive controls and multiple edge detection algorithms.',
    demoLink: null,
    githubLink: null,
  },
];

const DEFAULT_SHOWN = 4;

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
              className={`project-card ${project.isGraduation ? 'ring-2 ring-secondary' : ''}`}
            >
              <div className="p-6">
                {project.isGraduation && (
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-secondary text-white rounded-full">
                      Graduation Project
                    </span>
                  </div>
                )}
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