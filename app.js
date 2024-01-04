const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const port = '3003';

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Hello, world!');
});

app.post('/addUser', async (req, res) => {
  const user = req.body;
  const result = await prisma.users.create({
    data: user,
  });

  res.send(result);
});

app.listen(port, () => console.log(`listening on port ${port}`));
