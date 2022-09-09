import express from 'express';
import User from '../models/userModels.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const products = await User.find();
  if (products) {
    res.send(products);
  } else {
    res.error(err.message);
  }
});

export default userRouter;
