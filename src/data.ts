const VUE_LOGO_URL: string =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb53Cnw%2FbtrE4B8RhEe%2FOVpuzONIl4FhS46yZIMxf1%2Fimg.png";
const REACT_LOGO_URL: string =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnKtm6%2FbtrE4TBohvC%2F2ncvyr9lnpDiFffJVYOuQK%2Fimg.png";
const JS_LOGO_URL: string =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FexVmde%2FbtrE7xjPKlS%2FKayMasQXKbQuBuMnjhKpKk%2Fimg.png";
interface ISkillSet {
  initial: string;
  name: string;
  score: number;
  color: string;
  subColor: string;
}

interface IWorks {
  logoUrl: string;
  language: string;
  title: string;
  overview: string;
  desc: string;
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

export const works: IWorks[] = [
  {
    logoUrl: JS_LOGO_URL,
    language: "javascript",
    title: "starbucks",
    overview: "Starbucks clone.",
    desc: "스타벅스 클론입니다",
  },
  {
    logoUrl: REACT_LOGO_URL,
    language: "react-js",
    title: "movie App",
    overview: "간단한 영화 검색",
    desc: "영화 검색 사이트입니다",
  },
  {
    logoUrl: REACT_LOGO_URL,
    language: "react-ts",
    title: "portfolio",
    overview: "portfolio",
    desc: "포트폴리오입니다",
  },
  {
    logoUrl: VUE_LOGO_URL,
    language: "Vue-js",
    title: "Table Order",
    overview: "테이블 주문/관리 시스템",
    desc: "식당에서 손님들이 테이블에서 qr코드로 주문을 할수있고, 식당주인은 테이블마다의 주문 현황 및 조리중인 음식을 확인 할 수 있습니다.",
  },
];
