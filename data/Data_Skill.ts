import { SiNextdotjs, SiReact, SiRedux, SiBootstrap, SiLaravel, SiPhp, SiFirebase, SiPlanetscale, SiDotnet, SiOracle, SiPostgresql, SiApachekafka, SiGithub, SiVercel, SiPrisma, SiFigma, SiNginx, SiDocker  } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5 } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

import { Skill } from "./type";

export const skills: Skill[] = [
  {
    id: 1,
    title: "FrontEnd",
    stacks: [
      { title: "Next.js", icon: SiNextdotjs },
      { title: "React.js", icon: SiReact },
      { title: "Redux", icon: SiRedux },
      { title: "TypeScript", icon: BiLogoTypescript },
      { title: "JavaScript", icon: BiLogoJavascript },
      { title: "Tailwind CSS", icon: BiLogoTailwindCss },
      { title: "Bootstrap", icon: SiBootstrap },
      { title: "CSS3", icon: BiLogoCss3 },
      { title: "HTML5", icon: BiLogoHtml5 },
    ],
  },
  {
    id: 2,
    title: "Backend",
    stacks: [
      { title: "C#", icon: TbBrandCSharp },
      { title: ".NET", icon: SiDotnet },
      { title: "GO", icon: FaGolang },
      { title: "Laravel", icon: SiLaravel },
      { title: "PHP", icon: SiPhp },
      { title: "Postgre", icon: SiPostgresql },
      { title: "Oracle", icon: SiOracle },
      { title: "PlanetScale", icon: SiPlanetscale },
      { title: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: 3,
    title: "Other",
    stacks: [
      { title: "NGINX", icon: SiNginx },
      { title: "Docker", icon: SiDocker },
      { title: "Kafka", icon: SiApachekafka },
      { title: "GitHub", icon: SiGithub },
      { title: "Prisma", icon: SiPrisma },
      { title: "Vercel", icon: SiVercel },
      { title: "Figma", icon: SiFigma },
    ],
  },
];
