import express from 'express';
import cors from 'cors';

import { categoryRoutes } from "./modules/categories/categories.routes";
import { questionRoutes } from './modules/questions/questions.routes';
import { usersRoutes } from './modules/users/users.routes';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;


app.use('/category', categoryRoutes);
app.use('/question', questionRoutes);
app.use('/users', usersRoutes);
app.use('/',express.static('public/admin-app'));

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});