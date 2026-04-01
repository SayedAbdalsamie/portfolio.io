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
            <p className="text-sm font-medium uppercase tracking-widest text-secondary/90">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sayed Mohammed
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-secondary">
              Machine Learning Engineer | Computer Vision | NLP
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
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              {[
                'Model accuracy into the 90–99% range',
                'Up to ~30% faster processing via optimization',
                'CV, NLP & production MLOps experience',
                '243+ hr Data Science & AI diploma (AMIT)',
              ].map((line) => (
                <div
                  key={line}
                  className="glass-panel rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-textSecondary"
                >
                  {line}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
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
            <motion.div
              className="relative inline-flex shrink-0"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              {/* Outer soft halo */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-full bg-secondary/15 blur-2xl dark:bg-secondary/20"
                aria-hidden
              />
              {/* Wide outer ring */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-full border-2 border-secondary/30 shadow-[0_0_48px_rgba(100,255,218,0.28)] dark:border-secondary/40 dark:shadow-[0_0_56px_rgba(100,255,218,0.35)]"
                aria-hidden
              />
              {/* Inner accent ring */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-full border-2 border-secondary/55"
                aria-hidden
              />
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-72 lg:w-72 overflow-hidden rounded-full bg-gray-200 ring-2 ring-secondary/40 shadow-lg dark:bg-tertiary">
                <img
                  src="IMG_20240220_223733_239.jpg"
                  alt="Sayed Mohammed"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 