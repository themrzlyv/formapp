import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import ConnectDb from './helpers/ConnectDb.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT

ConnectDb();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})