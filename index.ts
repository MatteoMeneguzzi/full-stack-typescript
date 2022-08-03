import express from 'express';

import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  let height = _req.query.height;
  let weight = _req.query.weight;

  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    let bmi = calculateBmi(Number(height), Number(weight));
    res.json({ weight, height, bmi });
  } else {
    res.json({ error: 'malformatted parameters' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
