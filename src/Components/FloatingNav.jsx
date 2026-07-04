import { useState } from "react";
import { motion } from "motion/react";

function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-2 right-2 p-4 flex flex-col items-end gap-4 sm:bottom-8 sm:right-8">
        <nav
          className={`transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-2">
            <motion.li whileTap={{ scale: 0.95 }}>
              <a
                className="group flex items-center justify-center p-1 gap-4 text-sm rounded-md cursor-pointer sm:text-md"
                href="#about"
              >
                <span className="flex flex-1 justify-center bg-surface px-4 py-2 border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  About
                </span>
                <div className="flex items-center justify-center p-2 bg-surface border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="currentColor"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"></path>
                    <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"></path>
                  </svg>
                </div>
              </a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <a
                className="group flex items-center justify-center p-1 gap-4 text-sm rounded-md cursor-pointer sm:text-md"
                href="#project"
              >
                <span className="flex flex-1 justify-center bg-surface px-4 py-2 border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  Project
                </span>
                <div className="flex items-center justify-center p-2 bg-surface border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="currentColor"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17.0794 6.53297L15.4953 4.94738C14.2496 3.70049 12.5601 3 10.7985 3C9.95308 3 9.52971 4.02309 10.1275 4.62145L10.5245 5.01883C11.9169 6.41256 11.9169 8.67222 10.5245 10.0659L13.0456 12.5895L14.5583 11.0754L16.0709 12.5895C15.514 13.147 15.514 14.0508 16.0709 14.6083L16.5752 15.113C16.9876 15.5258 17.1938 15.7322 17.4162 15.8426C17.8394 16.0525 18.3363 16.0525 18.7595 15.8426C18.9819 15.7322 19.1881 15.5258 19.6005 15.113L21.1132 13.5989C21.5256 13.1861 21.7318 12.9797 21.842 12.7571C22.0517 12.3335 22.0517 11.8361 21.842 11.4125C21.7318 11.1898 21.5256 10.9834 21.1132 10.5706L20.6089 10.0659C20.052 9.50845 19.149 9.50845 18.592 10.0659L17.0794 8.55181C17.6363 7.99432 17.6363 7.09046 17.0794 6.53297Z"></path>
                    <path d="M10.6074 10L2.52431 17.9822C2.1886 18.3138 2 18.7634 2 19.2322C2 20.2085 2.80146 21 3.7901 21C4.26487 21 4.72019 20.8138 5.0559 20.4822L13.6453 12"></path>
                  </svg>
                </div>
              </a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <a
                className="group flex items-center justify-center p-1 gap-4 text-sm rounded-md cursor-pointer sm:text-md"
                href="#contact"
              >
                <span className="flex flex-1 justify-center bg-surface px-4 py-2 border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  Contact
                </span>
                <div className="flex items-center justify-center p-2 bg-surface border border-border rounded-full transition-colors duration-300 ease-in group-hover:bg-surface-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="currentColor"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="M9.1585 5.71217L8.75584 4.80619C8.49256 4.21382 8.36092 3.91762 8.16405 3.69095C7.91732 3.40688 7.59571 3.19788 7.23592 3.08779C6.94883 2.99994 6.6247 2.99994 5.97645 2.99994C5.02815 2.99994 4.554 2.99994 4.15597 3.18223C3.68711 3.39696 3.26368 3.86322 3.09497 4.35054C2.95175 4.76423 2.99278 5.18937 3.07482 6.03964C3.94815 15.0901 8.91006 20.052 17.9605 20.9254C18.8108 21.0074 19.236 21.0484 19.6496 20.9052C20.137 20.7365 20.6032 20.3131 20.818 19.8442C21.0002 19.4462 21.0002 18.972 21.0002 18.0237C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8361C20.0826 15.6393 19.7864 15.5076 19.194 15.2443L18.288 14.8417C17.6465 14.5566 17.3257 14.414 16.9998 14.383C16.6878 14.3533 16.3733 14.3971 16.0813 14.5108C15.7762 14.6296 15.5066 14.8543 14.9672 15.3038C14.4304 15.7511 14.162 15.9748 13.834 16.0946C13.5432 16.2009 13.1588 16.2402 12.8526 16.1951C12.5071 16.1442 12.2426 16.0028 11.7135 15.7201C10.0675 14.8404 9.15977 13.9327 8.28011 12.2867C7.99738 11.7576 7.85602 11.4931 7.80511 11.1476C7.75998 10.8414 7.79932 10.457 7.90554 10.1662C8.02536 9.83822 8.24905 9.5698 8.69643 9.03294C9.14586 8.49362 9.37058 8.22396 9.48939 7.91885C9.60309 7.62688 9.64686 7.31234 9.61719 7.00042C9.58618 6.67446 9.44362 6.3537 9.1585 5.71217Z"></path>
                  </svg>
                </div>
              </a>
            </motion.li>
          </ul>
        </nav>
        <motion.button
          className={`relative flex items-center justify-center p-4 border rounded-full cursor-pointer transition-all duration-300 hover:scale-105 ${
            isOpen ? "bg-surface border-border" : "bg-text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {/* Hamburger */}
          <svg
            className={`absolute text-bg transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5L20 5" />
            <path d="M4 12L20 12" />
            <path d="M4 19L20 19" />
          </svg>

          {/* X */}
          <svg
            className={`transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
          </svg>
        </motion.button>
      </div>
    </>
  );
}

export default FloatingNav;
