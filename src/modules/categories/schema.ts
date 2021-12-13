import mongoose from '../../connection';

export interface CategoriesInterface extends mongoose.Document {
    name: string
}

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Categories = mongoose.model<CategoriesInterface>('categories', categoriesSchema);

export default Categories;
