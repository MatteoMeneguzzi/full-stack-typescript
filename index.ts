import express from 'express';

import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  const height = _req.query.height;
  const weight = _req.query.weight;

  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({ weight, height, bmi });
  } else {
    res.json({ error: 'malformatted parameters' });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).send({ error: 'parameters missing' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  for (let index = 0; index < daily_exercises.length; index++) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const element = daily_exercises[index];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (isNaN(element) || isNaN(target))
      return res.status(400).send({ error: 'malformatted parameters' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(daily_exercises, target);

  return res.json({ result: result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
