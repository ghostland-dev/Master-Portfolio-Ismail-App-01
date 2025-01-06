import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-secondary via-primary to-blue-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            MOUYAHADA ISMAIL
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-primary font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Manager d'Architecture & Développeur Full Stack
          </motion.h2>
          <motion.p 
            className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Spécialisé dans la conception et le développement d'architectures logicielles innovantes
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:ismail.mouyahada@gmail.com"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Me contacter
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-mouyahada/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};