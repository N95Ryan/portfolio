import {
  SiGithub,
  SiLinkedin,
  SiBluesky,
  SiVercel,
  SiMalt,
} from "react-icons/si";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center space-x-4 bg-white rounded px-6 py-4">
        <a className="icon" href="https://github.com/N95Ryan" target="blank">
          <SiGithub
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Github"
          />
        </a>

        <a
          className="icon"
          href="https://www.linkedin.com/in/ryan-pina-silasse/"
          target="blank"
        >
          <SiLinkedin
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="LinkedIn"
          />
        </a>

        <a
          className="icon"
          href="https://bsky.app/profile/n95ryan.bsky.social"
          target="blank"
        >
          <SiBluesky
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="BlueSky"
          />
        </a>

        <a className="icon" href="https://vercel.com/" target="blank">
          <SiVercel
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Vercel"
          />
        </a>

        <a
          className="icon"
          href="https://www.malt.fr/profile/ryanpinasilasse"
          target="blank"
        >
          <SiMalt
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Malt"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
