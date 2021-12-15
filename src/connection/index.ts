import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://root:root@db:27017/gamecommerce?authSource=admin';

const bootsTrap = () => {
  console.log(MONGO_URI);
  mongoose.connect(
    MONGO_URI,
  ).catch((err) => { console.log(err); });
};

bootsTrap();

export default mongoose;
