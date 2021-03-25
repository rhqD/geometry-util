const round = (num: number, precision: number = 4) => {
  const factor = 10 ** precision;
  return Math.round(num * factor) / factor;
}

export default round;