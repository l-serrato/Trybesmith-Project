import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.get('/products', productController.list);
productRouter.post('/products', productController.create);

export default productRouter;