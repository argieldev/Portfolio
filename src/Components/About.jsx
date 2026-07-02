function About() {
  const skills = ["HTML", "CSS"];

  return (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="text-md sm:text-xl">About</h2>
        <p className="text-center text-sm text-text-tertiary font-light sm:max-w-2xl sm:text-start sm:text-lg">
          I'm from the Philippines and have been actively learning web
          development for almost a year. I care about simplicity, reliability,
          and consistency. In my free time, I enjoy observing and studying ideas
          that can improve my understanding and help me grow as a developer. I'm
          currently looking for an opportunity to work with a team where I can
          continue learning, contribute, and gain real-world experience.
        </p>
        <ul className="flex items-center justify-center gap-4 sm:justify-start">
          {skills.map((skill, index) => (
            <li className="px-2 py-1 text-sm bg-surface border border-border rounded-md sm:px-4 sm:py-2" key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;
