import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
    const education = [
        {
            degree: 'B.Sc. Computer & Systems Engineering',
            university: 'Zagazig University',
            period: '2020 – 2025',
            gpa: '3.0 (Good)',
            description: 'Comprehensive study of computer systems, software engineering, and system architecture with focus on practical applications.',
        },
    ];

    const achievements = [
        'Graduation Project: Integrated City Management System (ICMS)',
        'Specialized in Machine Learning and AI applications',
        'Strong foundation in both theoretical and practical engineering concepts',
    ];

    return (
        <section id="education" className="section-padding">
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
                            <div key={index} className="bg-white dark:bg-primary rounded-lg p-6 shadow-md">
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
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
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
                        <div className="bg-white dark:bg-primary rounded-lg p-6 shadow-md">
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
                        <div className="bg-gray-50 dark:bg-tertiary rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-textPrimary mb-3">
                                Current Status
                            </h4>
                            <p className="text-gray-600 dark:text-textSecondary mb-3">
                                Actively pursuing my degree while working on real-world AI/ML projects and maintaining a strong academic performance.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-sm text-gray-600 dark:text-textSecondary">
                                    Expected Graduation: 2025
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
