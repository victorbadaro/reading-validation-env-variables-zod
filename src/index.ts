import express from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => console.log(`Server is running :${SERVER_PORT} 🚀`));
