function Projects() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="text-md sm:text-xl">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card */}
          <div className="flex flex-col px-2 py-4 gap-2 bg-surface border border-border rounded-md transition-colors .3s ease-in hover:bg-surface-hover">
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
          </div>
          <div className="flex flex-col px-2 py-4 gap-2 bg-surface border border-border rounded-md transition-colors .3s ease-in hover:bg-surface-hover">
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
          </div>
          <div className="flex flex-col px-2 py-4 gap-2 bg-surface border border-border rounded-md transition-colors .3s ease-in hover:bg-surface-hover">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
