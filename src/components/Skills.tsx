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
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
          Compétences & Réalisations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary text-white p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
              <p className="text-gray-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
          Frameworks & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-default"
            >
              {framework}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};