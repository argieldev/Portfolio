import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <section className="flex flex-col px-6 py-12 gap-32" id="about">
        <div className="flex flex-col gap-12 sm:flex-row">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm text-primary font-semibold sm:text-lg">
              Web Developer
            </h2>
            <p className="text-center text-sm text-text-secondary font-light sm:max-w-sm sm:text-start sm:text-lg">
              I build clean, functional web applications by turning{" "}
              <span className="text-primary">ideas into reality</span>,
              combining thoughtful design{" "}
              <span className="text-primary">with reliable</span> solutions
              while continuously learning and improving every day.
            </p>
            <ul className="flex gap-4">
              <li className="flex items-center px-4 py-2 gap-1 text-sm text-bg bg-primary border rounded-md transition-colors duration-50 ease-in cursor-pointer hover:bg-primary-hover sm:text-md">
                View Work{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  color="#000000"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"></path>
                </svg>
              </li>
              <li className="text-sm px-4 py-2 border border-border rounded-md transition-colors duration-50 ease-in cursor-pointer hover:border-text-primary sm:textmd">
                Get in Touch
              </li>
            </ul>
          </div>

          {/* Stacks */}
          <motion.div
            variants={
              {
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }
            }
            initial="hidden"
            animate="visible"
            transition={{ duration: .5, delay: .25 }}
          >
            <div className="rounded-md border border-vs-border bg-vs-bg px-2 py-4">
              <header className="mb-2 text-sm text-vs-text-secondary">
                Argiel &gt; Stack.css &gt; ...
              </header>

              <ul className="space-y-1 px-4 font-mono text-sm">
                <li className="flex gap-4">
                  <span className="w-4 text-vs-text-secondary">1</span>

                  <span className="text-vs-header">
                    @theme <span className="text-vs">{`{`}</span>
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="w-4 text-vs-text-secondary">2</span>

                  <span className="text-vs">
                    <span className="text-vs-variable">--stack-frontend</span>:{" "}
                    <span className="text-vs-accent">"React"</span>, JavaScript,
                    CSS, HTML;
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="w-4 text-vs-text-secondary">3</span>

                  <span className="text-vs">
                    <span className="text-vs-variable">--stack-backend</span>:{" "}
                    <span className="text-vs-accent">"Express.js"</span>,
                    Node.js;
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="w-4 text-vs-text-secondary">4</span>

                  <span className="text-vs">
                    <span className="text-vs-variable">--stack-database</span>:
                    MongoDB, Firebase Firestore;
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="w-4 text-vs-text-secondary">5</span>

                  <span className="text-vs">{`}`}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
