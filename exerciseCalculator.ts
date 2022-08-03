// interface Result {
//   periodLength: number;
//   trainingDays: number;
//   success: boolean;
//   rating: number;
//   ratingDescription: string;
//   target: number;
//   average: number;
// }

const evaluateArguments = (args: Array<string>) => {
  // let target = Number(args[2]);

  if (args.length < 3) throw new Error(`Not enough arguments`);

  let values: number[] = [];

  for (let index = 2; index < args.length; index++) {
    const element = args[index];

    if (!isNaN(Number(element))) {
      values.push(Number(element));
    } else {
      throw new Error('Provided values were not numbers');
    }
  }

  return { target: values[0], array: values.slice(1) };
};

export const calculateExercises = (arr: Array<number>, target: number) => {
  let periodLength: number = arr.length;

  let training: Array<number> = [];
  arr.forEach((number) => {
    if (Number(number) !== 0) {
      training.push(number);
    }
  });

  let trainingDays = training.length;

  let total = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    total += element;
  }

  let average: number = total / arr.length;

  let rating = 0;
  let ratingDescription = '';

  if (average < 1.5) {
    rating = 1;
    ratingDescription = `too bad, you didn't even try`;
  } else if (average >= 1.5 && average < 2.5) {
    rating = 2;
    ratingDescription = `not too bad but could be better`;
  } else if (average >= 2.5) {
    rating = 3;
    ratingDescription = `great, that's the spirit!`;
  } else {
    rating = 0;
    ratingDescription = `something bad happened`;
  }

  let success = false;

  if (average >= target) success = true;

  console.log({
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  });
};

try {
  const { target, array } = evaluateArguments(process.argv);

  calculateExercises(array, target);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
