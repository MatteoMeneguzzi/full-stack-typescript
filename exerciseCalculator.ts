interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (arr: Array<number>, target: number): Result => {
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

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
