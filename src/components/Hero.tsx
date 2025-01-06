import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            MOUYAHADA ISMAIL
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-8">
            Manager d'Architecture & Développeur Full Stack
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12">
            Spécialisé dans la conception et le développement d'architectures logicielles innovantes
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:ismail.mouyahada@gmail.com"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Me contacter
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-mouyahada/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};