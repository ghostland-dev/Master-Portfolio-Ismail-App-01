import { motion } from "framer-motion";

const experiences = [
  {
    title: "Manager d'architecture logicielle des SI",
    company: "Access Energies",
    period: "09/2024 - 12/2024",
    location: "Petit-Couronne, France",
    skills: [
      "Sécuriser et optimiser les flux des données au sein d'un SI existant",
      "Conception des architectures des systèmes d'information Agile",
      "Automatisation des processus de déploiement DevSecOps",
      "Assurer la scalabilité, la maintenabilité et la gestion des flux des données",
    ],
  },
  {
    title: "Concepteur et développeur d'applications",
    company: "Access Energies",
    period: "09/2023 - 09/2024",
    location: "Petit-Couronne, France",
    skills: [
      "Conception d'architectures UML, MCD et flux de données",
      "Conception des maquettes Figma et des prototypes",
      "Développement full-stack et containérisation des projets mobile et web",
    ],
  },
  {
    title: "Développeur informatique",
    company: "Access Energies",
    period: "09/2021 - 09/2023",
    location: "Petit-Couronne, France",
    skills: [
      "Rédaction des cahiers des charges et le dossier des spécifications",
      "Développement full-stack des applications mobile et web",
      "déploiement des applications monolithes et des base de données SQL",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-secondary/95" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Expérience Professionnelle
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">{exp.title}</h3>
              <div className="text-text-secondary mb-4">
                <p className="font-semibold">{exp.company} | {exp.period}</p>
                <p className="text-sm">{exp.location}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {exp.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="hover:text-primary transition-colors">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};