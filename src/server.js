const express = require('express');

const app = express();

const todoList = [];

app.get('/', (req, resp) => {
  return resp.status(200).send();
});

app.post('/todo', (req, resp) => {
  const { name, description } = req.body;

  todoList.push({ name, description });

  return resp.status(201).json(todoList);
});

app.listen(3333, () => console.log('Server is starting!'));
