import express, { Application, Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running');
  });
  
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
