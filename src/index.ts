import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello worlds');
});

const server = app.listen(500, () => {
  console.log('Hello World');
});

export default server;
