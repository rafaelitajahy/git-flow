const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  return resp.status(200).send();
});

app.listen(3333, () => console.log('Server is starting!!!'));
