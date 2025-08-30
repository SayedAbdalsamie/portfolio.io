import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '🗄️' },
    ]
  },
  {
    title: 'Libraries & Tools',
    skills: [
      { name: 'TensorFlow', icon: '🤖' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'OpenCV', icon: '👁️' },
      { name: 'MLflow', icon: '📈' },
      { name: 'Hugging Face', icon: '🤗' },
      { name: 'Streamlit', icon: '📱' },
      { name: 'Flask', icon: '🌐' },
    ]
  },
  {
    title: 'Domains',
    skills: [
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'Deep Learning', icon: '⚡' },
      { name: 'CNN', icon: '🖼️' },
      { name: 'RNN', icon: '🔄' },
      { name: 'LSTM', icon: '⏰' },
      { name: 'Transformers', icon: '🔀' },
      { name: 'GANs', icon: '🎨' },
      { name: 'NLP', icon: '📝' },
      { name: 'Computer Vision', icon: '👁️' },
      { name: 'MLOps', icon: '⚙️' },
    ]
  },
  {
    title: 'Other',
    skills: [
      { name: 'Data Preprocessing', icon: '🧹' },
      { name: 'Feature Engineering', icon: '🔧' },
      { name: 'Statistics', icon: '📊' },
      { name: 'Probability', icon: '🎲' },
    ]
  }
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

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge flex flex-col items-center justify-center space-y-2 p-3"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 