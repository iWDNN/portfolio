export interface ISkillSet {
  initial: string;
  name: string;
  score: number;
  color: string;
  subColor?: string;
}

export const skillSet: ISkillSet[] = [
  {
    initial: "HTML",
    name: "HTML",
    score: 80,
    color: "#D84925",
    subColor: "#E77142",
  },
  {
    initial: "CSS",
    name: "CSS",
    score: 70,
    color: "#2449D9",
    subColor: "#30A0D1",
  },
  {
    initial: "JS",
    name: "JavaScript",
    score: 70,
    color: "#D99A26",
    subColor: "#E5B525",
  },
  {
    initial: "TS",
    name: "TypeScript",
    score: 50,
    color: "#072E5C",
    subColor: "#0174C2",
  },
  {
    initial: "REACT",
    name: "React",
    score: 50,
    color: "#5BD0FF",
    subColor: "#5BD0ED",
  },
  {
    initial: "VUE",
    name: "Vue",
    score: 40,
    color: "#32455A",
    subColor: "#3daf7d",
  },
];
