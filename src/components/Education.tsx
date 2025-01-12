import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">University of Engineering and Management Jaipur</h3>
                  <p className="text-purple-600 font-medium">BCA</p>
                  <p className="text-gray-600 mt-2">9.30 CGPA</p>
                  <p className="text-gray-500">2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <School className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Nucleus Career Point Chomu</h3>
                  <p className="text-blue-600 font-medium">Senior Secondary</p>
                  <p className="text-gray-600 mt-2">91.40%</p>
                  <p className="text-gray-500">2021</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;