import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiAxios,
  SiExpress,
  SiWordpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";

function skillsDetails() {
  const techSkills = [
    {
      title: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
      color: "#007acc",
    },

    {
      title: "Go",
      icon: <BiLogoGoLang />,
      color: "#00ADD8",
    },
  ];

  const frontSkills = [
    {
      title: "React",
      icon: <SiReact />,
      color: "#61DAFB",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      color: "#fff",
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    {
      title: "Sass",
      icon: <SiSass />,
      color: "#cc6699",
    },
  ];

  const backSkills = [
    {
      title: "Axios",
      icon: <SiAxios />,
      color: "#5c2ce4",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql />,
      color: "#E10098",
    },
    {
      title: "Express.js",
      icon: <SiExpress />,
      color: "#fff",
    },
    {
      title: "WordPress",
      icon: <SiWordpress />,
      color: "#21759B",
    },
  ];

  const designSkills = [
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "#31A8FF",
    },
    {
      title: "Illustrator",
      icon: <SiAdobeillustrator />,
      color: "#FF9A00",
    },
    {
      title: "Figma",
      icon: <SiFigma />,
      color: "#F24E1E",
    },
  ];

  return { techSkills, frontSkills, backSkills, designSkills };
}

export default skillsDetails;
