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
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/95 to-secondary" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Me Contacter
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center">
            <a
              href="mailto:ismail.mouyahada@gmail.com"
              className="text-white hover:text-primary transition-colors text-lg"
            >
              ismail.mouyahada@gmail.com
            </a>
            <a
              href="tel:+33784075061"
              className="text-white hover:text-primary transition-colors text-lg"
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
                className="w-full px-6 py-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all h-40"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};