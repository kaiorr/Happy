import express from 'express';
import './database/connection';

const app = express();

app.use(express.json());

app.listen(3333);

app.get('/users', (request, response)=> {
  return response.json({ message: "Funfando" })
})
