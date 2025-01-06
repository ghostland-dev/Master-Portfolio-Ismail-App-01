import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Me Contacter
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center">
            <a
              href="mailto:ismail.mouyahada@gmail.com"
              className="text-white hover:text-primary transition-colors"
            >
              ismail.mouyahada@gmail.com
            </a>
            <a
              href="tel:+33784075061"
              className="text-white hover:text-primary transition-colors"
            >
              +33 7 84 07 50 61
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-secondary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-secondary"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-secondary h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};