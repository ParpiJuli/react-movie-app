export const getAverage = (voteAverage?: number) => {
  if(!voteAverage) {
    return null;
  }
  return Math.floor(voteAverage);
};