const RED = "#DC6F5B";
const GREEN = "#1BABA1";
const DARKERBLUE = "#569CD6";
const BLUE = "#4FC1FF";
const WHITE = "#DCDCAA";

interface IBarData {
  color: string;
  width: string;
}

function randomBarData(n: number) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomWidth = Math.floor(Math.random() * 100);
    result.push({
      color: randomWidth > 70 ? DARKERBLUE : randomWidth < 50 ? BLUE : WHITE,
      width: randomWidth < 30 ? "30%" : randomWidth + "%",
    });
  }
  return result;
}

export const barData: IBarData[] = randomBarData(20);
