import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🤖' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'NLP', icon: '📝' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'scikit-learn', icon: '📊' },
  { name: 'Flask', icon: '🌐' },
  { name: 'Streamlit', icon: '📱' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-tertiary">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary">
            Here are the technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="skill-badge flex items-center justify-center space-x-2"
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 