import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'AI Clinic Chatbot',
    description:
      'RAG-based assistant using FAISS and Sentence Transformers with Gemini. Achieved ~87% intent classification accuracy; cut ambiguous replies ~40% and improved resolution time ~30%.',
    demoLink: null,
    githubLink: 'https://github.com/SayedAbdalsamie/AI-Clinic-Chatbot-',
  },
  {
    title: 'ID Card OCR System',
    description:
      'OCR pipeline for ID cards with PaddleOCR for Arabic and English. Extracts structured fields (names, addresses, ID numbers) via modular cropping per region and optimized recognition.',
    demoLink: null,
    githubLink: 'https://github.com/SayedAbdalsamie/Egyptian-ID-OCR-Streamlit',
  },
  {
    title: 'ICMS – AI Module',
    description:
      'Gemini-powered chatbot, transformer-based issue classifier for categorization and prioritization, text moderation with ML ensembles, REST APIs in Flask, deployed with Docker and Azure.',
    demoLink: null,
    githubLink: 'https://github.com/SayedAbdalsamie/ICMS-AI-Module',
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
    <section id="projects" className="section-padding border-t border-white/5 dark:border-secondary/10">
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
                    <span className="inline-block rounded-full border border-secondary/40 bg-secondary/15 px-2 py-1 text-xs font-semibold text-secondary">
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
                <div className="flex flex-wrap gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github inline-flex items-center gap-1.5"
                    >
                      GitHub
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow inline-flex items-center gap-1.5 py-2 text-sm"
                    >
                      Live
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
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
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-xl border border-secondary/40 bg-secondary/15 px-6 py-2.5 font-semibold text-secondary shadow-glow backdrop-blur-sm transition hover:bg-secondary/25"
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