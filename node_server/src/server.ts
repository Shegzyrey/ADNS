import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req:Request, res: Response) => {
    res.send('Setting up the Node end');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});