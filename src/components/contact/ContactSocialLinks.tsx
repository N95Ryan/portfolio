import { SiGithub, SiLinkedin, SiX, SiBento, SiMalt } from "react-icons/si";

export default function ContactSocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-4 bg-white rounded-lg px-6 py-4 shadow-lg max-w-fit mx-auto">
      <a
        className="icon"
        href="https://github.com/N95Ryan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <SiGithub
          className="text-3xl text-black hover:text-gray-600 transition duration-300"
          title="Github"
        />
      </a>

      <a
        className="icon"
        href="https://www.linkedin.com/in/ryan-pina-silasse/"
        hrefLang="fr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <SiLinkedin
          className="text-3xl text-black hover:text-gray-600 transition duration-300"
          title="LinkedIn"
        />
      </a>

      <a
        className="icon"
        href="https://x.com/BigNayru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <SiX
          className="text-3xl text-black hover:text-gray-600 transition duration-300"
          title="X (Twitter)"
        />
      </a>

      <a
        className="icon"
        href="https://bento.me/nayru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bento"
      >
        <SiBento
          className="text-3xl text-black hover:text-gray-600 transition duration-300"
          title="Bento"
        />
      </a>

      <a
        className="icon"
        href="https://www.malt.fr/profile/ryanpinasilasse"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Malt"
      >
        <SiMalt
          className="text-3xl text-black hover:text-gray-600 transition duration-300"
          title="Malt"
        />
      </a>
    </div>
  );
}
