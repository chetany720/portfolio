import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen } from 'lucide-react';

const courses = [
  { name: 'Cloud Computing', platform: 'NPTEL' },
  { name: 'Ethical Hacking Essentials (EHE)', platform: 'Coursera' },
  { name: 'Introduction to Java', platform: 'Coursera' },
  { name: 'Introduction to Career Skills in Software Development', platform: 'LinkedIn' },
  { name: 'AI Fundamentals for Data Professionals', platform: 'LinkedIn' },
  { name: 'Programming Foundations: Discrete Mathematics', platform: 'LinkedIn' },
  { name: 'WordPress: Ecommerce', platform: 'LinkedIn' },
  { name: 'Artificial Intelligence Foundations: Thinking Machines', platform: 'LinkedIn' },
  { name: 'Building Computer Vision Applications with Python', platform: 'LinkedIn' },
  { name: 'Getting Started with AI and Machine Learning', platform: 'LinkedIn' },
  { name: 'Introduction to AI Governance', platform: 'LinkedIn' },
  { name: 'The State of AI and Copyright', platform: 'LinkedIn' },
  { name: 'Responsible AI: Principles and Practical Applications', platform: 'LinkedIn' },
  { name: 'Ethics in the Age of Generative AI', platform: 'LinkedIn' },
  { name: 'Responsible AI Foundations', platform: 'LinkedIn' },
  { name: 'Introduction to IT Architecture', platform: 'LinkedIn' },
  { name: 'Foundations of Learning Management Systems (LMS)', platform: 'LinkedIn' },
  { name: 'Decision-Making Strategies', platform: 'LinkedIn' },
];

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Courses & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{course.platform}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;