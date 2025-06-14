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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary">
              Hi, I'm Sayed Mohammed 👋
            </h2>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              I'm an aspiring AI/ML Engineer with a passion for building intelligent systems that make a real impact. 
              My expertise lies in computer vision, natural language processing, and MLOps, where I combine cutting-edge 
              technologies to solve complex problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-textSecondary">
              With a strong foundation in machine learning and deep learning, I specialize in developing 
              end-to-end AI solutions that are both innovative and practical. I'm particularly interested 
              in creating applications that can understand and process visual and textual data effectively.
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
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              {/* Replace src with your actual profile photo path */}
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