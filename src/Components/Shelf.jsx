function Shelf() {
  return (
    <>
      {/* Shelf */}
      <div className="relative">
        <h5 className="absolute right-6 flex items-center text-sm text-text-muted rotate-90 sm:text-md">
          Scroll
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            color="currentColor"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="absolute left-12"
          >
            <path d="M18.5 12L4.99997 12"></path>
            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"></path>
          </svg>
        </h5>
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
      </div>
    </>
  );
}

export default Shelf;
