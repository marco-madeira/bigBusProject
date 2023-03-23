export const formatTime = (time: number) => {
  const hours = Math.floor(time / 10000);
  const minutes = Math.floor((time % 10000) / 100);
  const seconds = time % 100;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
