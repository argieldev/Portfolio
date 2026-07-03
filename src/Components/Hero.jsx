function Hero() {
  return (
    <>
      <section className="flex flex-col gap-32">
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
          </div>

          {/* Stacks */}
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
                  <span className="text-vs-accent">"Express.js"</span>, Node.js;
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
        </div>

        <ul className="grid grid-cols-1 border-t border-border sm:grid-cols-4">
          <li className="flex flex-col gap-1 text-sm border-b border-border px-4 py-4 sm:text-md sm:border-r sm:border-b-0">
            <span className="text-text-muted font-ibm-plex-mono">Based in</span>
            <span>Philippines</span>
          </li>

          <li className="flex flex-col gap-1 text-sm border-b border-border px-4 py-4 sm:text-md sm:border-r sm:border-b-0">
            <span className="text-text-muted font-ibm-plex-mono">Focus</span>
            <span>Web Dev</span>
          </li>

          <li className="flex flex-col gap-1 text-sm border-b border-border px-4 py-4 sm:text-md sm:border-r sm:border-b-0">
            <span className="text-text-muted font-ibm-plex-mono">Projects</span>
            <span>-0</span>
          </li>

          <li className="flex flex-col gap-1 text-sm border-b border-border px-4 py-4 sm:text-md sm:border-b-0">
            <span className="text-text-muted font-ibm-plex-mono">Status</span>
            <span>Learning</span>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Hero;
