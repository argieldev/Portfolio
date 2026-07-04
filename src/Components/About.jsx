function About() {
  return (
    <>
      <section className="flex flex-col px-6 gap-4">
        <h2 className="text-sm text-subheader font-ibm-plex-mono sm:text-lg">
          // ABOUT
        </h2>
        {/* Wrapper to center the notepad */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-fit flex flex-col bg-notepad-bg border border-notepad-border rounded-md">
            <header className="flex items-center gap-4 mx-4 ">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="p-2 pr-12 text-sm font-ibm-plex-mono font-medium bg-tab-bar rounded-t-md sm:text-lg">
                about.txt
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11.9922 4.00012V20.0001M19.9922 12.0001H3.99222"></path>
              </svg>
            </header>
            <ul className="flex px-4 gap-1 text-md bg-tab-bar sm:lg">
              <li className="px-2 py-1 my-1 rounded-md hover:bg-tab-hover">Edit</li>
              <li className="px-2 py-1 my-1 rounded-md hover:bg-tab-hover">File</li>
              <li className="px-2 py-1 my-1 rounded-md hover:bg-tab-hover">View</li>
            </ul>
            <div className="px-2 py-4 text-center text-sm text-text-tertiary font-light bg-editor-bg sm:max-w-2xl sm:px-4 sm:py-8 sm:text-start sm:text-xl">
              {" "}
              <p className="px-2 pb-4 text-center text-sm text-text-tertiary font-light bg-editor-bg sm:max-w-2xl sm:px-4 sm:pb-8 sm:text-start sm:text-xl">
                I'm from the Philippines and have been actively learning web
                development for almost a year. I care about simplicity,
                reliability, and consistency. In my free time, I enjoy observing
                and studying ideas that can improve my understanding and help me
                grow as a developer. I'm currently looking for an opportunity to
                work with a team where I can continue learning, contribute, and
                gain real-world experience.
              </p>
              <div className="flex justify-between py-2 mx-4 text-sm text-text-tertiary bg-editor-bg border-t border-notepad-border">
                <p className="text-[10px] font-ibm-plex-mono sm:text-sm">
                  Ln 1, Col 1 UTF-8
                </p>
                <p className="text-[10px] text-primary font-ibm-plex-mono sm:text-sm">
                  Plain Text
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
