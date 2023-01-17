import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/', Router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-s1hjcab-shard-00-00.ftazuox.mongodb.net:27017,ac-s1hjcab-shard-00-01.ftazuox.mongodb.net:27017,ac-s1hjcab-shard-00-02.ftazuox.mongodb.net:27017/?ssl=true&replicaSet=atlas-du1g60-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);



Connection(URL);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(PORT, () => console.log(`Server is running ${PORT}`));

DefaultData();