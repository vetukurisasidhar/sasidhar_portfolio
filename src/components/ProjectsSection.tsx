import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    desc: "A complete e-commerce platform allowing users to browse products, add items to cart, and place orders with user authentication and order processing.",
    tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Product catalog and search",
      "Shopping cart functionality",
      "REST API backend",
      "Admin dashboard",
      "Responsive UI",
    ],
    github: "https://github.com/vetukurisasidhar",
  },
  {
    title: "BookStore (MERN App)",
    desc: "A complete full-stack e-commerce bookstore featuring secure JWT authentication and role-based access control for Users, Sellers, and Admins.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Secure signup/login with JWT",
      "Role-based access (User/Seller/Admin)",
      "Book uploads & catalog management",
      "Shopping cart & order placement",
      "Responsive dashboards",
    ],
    github: "https://github.com/vetukurisasidhar/Book_Store",
    live: "https://book-store-jade-six-31.vercel.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-code text-primary text-sm mb-2">// my work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl overflow-hidden group"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-code px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
