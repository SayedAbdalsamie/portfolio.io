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
              AI &amp; Machine Learning Engineer
            </h3>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              Results-driven ML engineer focused on scalable AI: end-to-end workflows, computer vision, NLP, and production deployment with MLOps.
              I have improved model accuracy into the 90–99% range and cut processing time by up to 30% through strong preprocessing and optimization.
            </p>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              I completed a 243+ hour Data Science and AI diploma (ML &amp; deep learning, CV &amp; NLP, visualization, MLOps, Docker, deployment) and have worked with real-world datasets at 5K+ samples, pushing accuracy toward 99% on select projects.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Languages: Arabic (Native) · English (Advanced)
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://portfolio-io-git-main-sayedabdalsamies-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                Portfolio
              </a>
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