import type { IconType } from "react-icons";

// experience
export type Experience = {
  id: number;
  place: string;
  title: string;
  timespan: string;
  projects: Project[];
};

type Project = {
  id_p: number;
  title_p: string;
  total_p: number;
};

// skill
export type Skill = {
  id: number;
  title: string;
  stacks?: Stack[];
};

type Stack = {
  title: string;
  icon: IconType;
};

// certificate
export type Certificate = {
  name: string;
  from: string;
  issued: string;
  credential: string;
  title: string;
  link: string;
  img: string;
};

// Contact
export type Contact = {
  label: string;
  target: string;
};

export type Media = {
  href: string;
  name: string;
  label: string;
};