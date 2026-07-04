import { motion } from "motion/react"

function Projects() {
  const projects = [1, 2, 3];

  return (
    <>
      <section className="flex flex-col px-6 py-12 gap-4" id="project">
        <h2 className="text-sm text-subheader font-ibm-plex-mono sm:text-lg">
          // Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card */}
          {projects.map((project, index) => (
            <motion.div
              className="flex flex-col px-2 py-4 gap-2 bg-surface border border-border rounded-md transition-colors .3s ease-in hover:bg-surface-hover"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: (index % 2) * .25 }}
            >
              <div className="w-full h-56 bg-bg">{/* Project Image */}</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-bg">
                  {/* Website Icon */}
                </div>
                <h3 className="flex gap-2 items-center text-lg sm:text-xl">
                  Project Title{" "}
                  <date className="text-sm text-text-muted font-light sm:md">
                    2023
                  </date>
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-md text-text-secondary sm:lg">
                  Project Description
                </p>
                <ul className="flex gap-2 text-[14px] text-text-tertiary">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
