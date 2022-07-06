interface IProject {
  title: string;
  skills: string;
  period: string;
  desc: string;
  feature: string;
}

export const skills = ["html/css", "javascript", "typescript", "vue3", "react"];
export const projects: IProject[] = [
  {
    title: "momentum",
    skills: "html,css,javascript",
    period: "2 days",
    desc: "브라우저의 첫 화면으로, 시간, 날씨, 간단한 할 일들을 기록해놓을 수 있는 스케쥴링 사이트",
    feature: "시간,명언,할 일",
  },
  {
    title: "momentum",
    skills: "html,css,javascript",
    period: "2 days",
    desc: "브라우저의 첫 화면으로, 시간, 날씨, 간단한 할 일들을 기록해놓을 수 있는 스케쥴링 사이트",
    feature: "시간,명언,할 일",
  },
  {
    title: "movie search site",
    skills: "html,scss,vue3,js",
    period: "long times",
    desc: "영화들을 필터링 검색을 할 수 있는 간단한 웹사이트",
    feature: "필터링 검색 기능(날짜,갯수)",
  },
  {
    title: "starbucks website clone",
    skills: "html, css, javascript",
    period: "1 week",
    desc: "스타벅스 웹사이트 클론 코딩",
    feature: "스타벅스 클론",
  },
];
