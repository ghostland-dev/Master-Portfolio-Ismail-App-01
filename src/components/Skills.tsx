import { motion } from "framer-motion";

const frameworks = [
  "ASP.net", "Laravel", "Nextjs", "Adonisjs", "ExpressJs", 
  "Symphony", "Flutter", "SpringBoot", "Vuejs", "Reactjs", 
  "Nestjs", "Ant-Design"
];

const metrics = [
  { label: "Optimisation des processus", value: "30% d'amélioration" },
  { label: "Amélioration de performance", value: "20% plus rapide" },
  { label: "Projets gérés simultanément", value: "5 projets" },
  { label: "Applications déployées", value: "19+" },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-secondary mb-16 text-center"
        >
          Compétences & Réalisations
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/95 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold mb-3 text-primary">{metric.value}</h3>
              <p className="text-gray-200 text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-secondary mb-12 text-center"
        >
          Frameworks & Technologies
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-default"
            >
              {framework}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};