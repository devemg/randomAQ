import express from 'express';
import cors from 'cors';

import { categoryRoutes } from "./modules/categories/categories.routes";
import { questionRoutes } from './modules/questions/questions.routes';
import { usersRoutes } from './modules/users/users.routes';
import { enviroment } from './enviroment';


const app = express();
app.use(express.json());
app.use(cors());

const port = enviroment.port || 3000;


app.use('/category', categoryRoutes);
app.use('/question', questionRoutes);
app.use('/users', usersRoutes);



app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});