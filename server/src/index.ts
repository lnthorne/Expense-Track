import express from 'express';
import connectDB from './database';
import 'dotenv/config';
import UserRouter from './util/routers/user.router';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
