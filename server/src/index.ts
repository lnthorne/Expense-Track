import express from 'express';
import connectDB from './database';
import 'dotenv/config';
import UserRouter from './util/routers/user.router';
import AuthRouter from './util/routers/auth.router';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/user', UserRouter);
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
