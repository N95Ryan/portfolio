import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function FooterSocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
      <a
        href="https://github.com/N95Ryan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white hover:text-purple-400 transition-colors duration-300"
      >
        <SiGithub className="text-2xl md:text-3xl" title="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/ryan-pina-silasse/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white hover:text-purple-400 transition-colors duration-300"
      >
        <SiLinkedin className="text-2xl md:text-3xl" title="LinkedIn" />
      </a>

      <a
        href="https://x.com/BigNayru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="text-white hover:text-purple-400 transition-colors duration-300"
      >
        <SiX className="text-2xl md:text-3xl" title="X (Twitter)" />
      </a>
    </div>
  );
}
