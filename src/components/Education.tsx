import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
    const education = [
        {
            degree: 'B.Sc. Computer & Systems Engineering',
            university: 'Zagazig University',
            period: '2020 – 2025',
            gpa: '2.9 (Good)',
            description: 'Computer and systems engineering with emphasis on software, systems design, and applied AI/ML in projects and coursework.',
        },
    ];

    const achievements = [
        '243+ hour Data Science & AI Diploma (AMIT Learning): ML, deep learning, CV, NLP, analysis & visualization, MLOps & Docker',
        'Graduation focus: ICMS AI module — chatbot, classification, moderation, APIs, Docker & Azure',
        'Experience with large real-world datasets (5K+ samples) and model accuracy targets up to ~99%',
    ];

    return (
        <section id="education" className="section-padding border-t border-white/5 dark:border-secondary/10">
            <div className="max-w-7xl mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
                        Education
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-textSecondary">
                        My academic journey and achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Education Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-textPrimary mb-6">
                            Academic Background
                        </h3>
                        {education.map((edu, index) => (
                            <div key={index} className="glass-card p-6">
                                <div className="flex items-start space-x-4">
                                    <AcademicCapIcon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-2">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-lg text-secondary font-medium mb-2">
                                            {edu.university}
                                        </p>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600 dark:text-textSecondary">
                                                {edu.period}
                                            </span>
                                            <span className="inline-flex items-center rounded-full border border-secondary/35 bg-secondary/10 px-3 py-1 text-sm font-medium text-emerald-800 dark:text-secondary">
                                                GPA: {edu.gpa}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-textSecondary">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Key Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-textPrimary mb-6">
                            Key Achievements
                        </h3>
                        <div className="glass-card p-6">
                            <div className="flex items-start space-x-4 mb-4">
                                <TrophyIcon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-textPrimary">
                                    Academic Excellence
                                </h4>
                            </div>
                            <ul className="space-y-3">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-gray-600 dark:text-textSecondary">
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Info */}
                        <div className="glass-panel p-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-textPrimary mb-3">
                                Graduation
                            </h4>
                            <p className="text-gray-600 dark:text-textSecondary mb-3">
                                Graduated with a B.Sc. in Computer &amp; Systems Engineering from Zagazig University (2020–2025). I continue building real-world AI/ML projects alongside my professional work.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="h-3 w-3 shrink-0 rounded-full bg-secondary/80 ring-2 ring-secondary/30" />
                                <span className="text-sm font-medium text-gray-700 dark:text-secondary">
                                    Graduated · 2025
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
