import express from 'express';
import * as dotenv from 'dotenv'
import { router } from './router'
dotenv.config()

const app = express();

const port = process.env.SERVER_PORT;

app.listen(port, () => { console.log(`Listening on port ${port}`) });

app.use(router);