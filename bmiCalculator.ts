interface BmiValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error(`Not enough arguments`);
  if (args.length > 4) throw new Error(`Too many arguments`);

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers');
  }
};

export const calculateBmi = (height: number, weight: number) => {
  let bmi = weight / Math.pow(height / 100, 2);

  let result = '';

  if (bmi >= 25) {
    result = `Overweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = `Normal (healthy weight)`;
  } else {
    result = `Underweight`;
  }

  return result;
};

try {
  const { value1, value2 } = parseArguments(process.argv);

  calculateBmi(value1, value2);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
