import { Experience } from "./type";

export const experience: Experience[] = [ 
  {
    id: 1,
    place: "PT Indomacro Prismatama",
    title: "Software Development | Supervisor",
    timespan: "Jan 2024 - Present",
    projects: [
      { id_p: 1, title_p: "Migrate .NET APIs to GO", total_p: 2 },
      { id_p: 3, title_p: "Migrate VB EXE to Webapp C# .Net", total_p: 2 },
      { id_p: 2, title_p: "Migrate Oracle to Postgre", total_p: 2 },
      { id_p: 4, title_p: "Create Kafka project to handle retur process", total_p: 2 },
      { id_p: 5, title_p: "APIs", total_p: 2 },
      { id_p: 6, title_p: "EXEs", total_p: 2 },
      { id_p: 7, title_p: "Windows Services", total_p: 2 },
    ],
  },
  {
    id: 2,
    place: "Dicoding Academy",
    title: "Study Independent | Front-End & React",
    timespan: "Aug 2022 - Dec 2022",
    projects: [],
  },
  {
    id: 3,
    place: "Hashmicro",
    title: "Software Implementation Consultant",
    timespan: "Feb 2022 - Jun 2022",
    projects: [],
  },
  {
    id: 4,
    place: "Multimedia Nusantara University",
    title: "Bachelor's Degree | Informatics",
    timespan: "Aug 2019 - Jul 2023",
    projects: [],
  },
];
