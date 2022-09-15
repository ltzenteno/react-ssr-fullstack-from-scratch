import express from 'express';
import { port } from './config';

const app = express(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}!`);
});