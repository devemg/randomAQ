import express from 'express';
import cors from 'cors';

import { categoryRoutes } from "./modules/categories/categories.routes";
import { questionRoutes } from './modules/questions/questions.routes';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;


app.use('/category',categoryRoutes);
app.use('/question',questionRoutes);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});