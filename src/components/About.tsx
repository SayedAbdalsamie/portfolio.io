import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary">
              Hi, I'm Sayed Mohammed 👋
            </h2>
            <h3 className="text-xl font-semibold text-secondary">
              Machine Learning Engineer
            </h3>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              I'm a Machine Learning Engineer skilled in building and deploying ML/DL models with Python, TensorFlow, and PyTorch.
              My expertise lies in NLP, Computer Vision, and MLOps, where I combine cutting-edge technologies to solve complex problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              I've delivered projects in sentiment analysis, accident classification, and facial emotion recognition with real-world datasets.
              Currently pursuing my B.Sc. in Computer & Systems Engineering at Zagazig University with a GPA of 3.0 (Good).
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Sayedabdalsamie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sayed-mohammed-085a94253/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 rounded-lg overflow-hidden shadow-lg">
              <img
                src="IMG_20240220_223733_239.jpg"
                alt="Sayed Mohammed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 