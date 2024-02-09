import express from 'express';
import { env } from '../env';

const app = express();
const SERVER_PORT = env.SERVER_PORT;

app.listen(SERVER_PORT, () => console.log(`Server is running :${SERVER_PORT} 🚀`));
