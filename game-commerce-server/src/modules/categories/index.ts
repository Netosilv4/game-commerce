import express from 'express';
import rescue from 'express-rescue';
import { getAllCategories, insertCategory } from './controllers';

const categoriesRoutes = express.Router();

categoriesRoutes.get('/', rescue(getAllCategories));

categoriesRoutes.post('/insert', rescue(insertCategory));

export default categoriesRoutes;
