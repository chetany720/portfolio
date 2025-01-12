import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-600 leading-relaxed mb-6">
              As an enthusiastic and dedicated BCA student, I bring a solid foundation in software development and a passion for creating impactful solutions. My journey in the tech world is driven by curiosity and a commitment to excellence.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              I pride myself on strong problem-solving skills, an eye for detail, and a proactive approach to learning. Whether it's tackling challenging coding problems or exploring new technologies, I thrive in environments where I can contribute and grow.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Key Attributes:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Proven ability to adapt to new challenges and technologies quickly.</li>
                <li>Exceptional teamwork and communication skills, honed through academic and personal projects.</li>
                <li>Passion for leveraging technology to solve real-world problems.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                <span>Hobbies: Try to learn new things</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2 text-blue-500" />
                <span>Languages: English, Hindi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;