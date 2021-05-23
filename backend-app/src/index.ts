import express from 'express';
import { categoryRoutes } from "./modules/categories/categories.routes";
import { questionRoutes } from './modules/questions/questions.routes';

const app = express();
app.use(express.json());
const port = process.env.port || 3000;


app.use('/category',categoryRoutes);
app.use('/question',questionRoutes);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});