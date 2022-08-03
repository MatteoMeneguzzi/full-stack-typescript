const calculateBmi = (height: string, weight: string) => {
  let bmi = Number(weight) / Math.pow(Number(height) / 100, 2);

  let result = '';

  if (bmi >= 25) {
    result = `Warning, you are overweight (${height} ${weight})`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = `Normal (${height} ${weight})`;
  } else {
    result = `Warning, you are underweight (${height} ${weight})`;
  }

  return result;
};

const a = process.argv[2];
const b = process.argv[3];

console.log(calculateBmi(a, b));
