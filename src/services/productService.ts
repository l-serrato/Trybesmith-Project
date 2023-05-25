import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({
  name,
  price,
  orderId,
}: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'userId is required';
  
  return null;
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
}

async function getById(id: number): Promise<ServiceResponse<Product>> {
  const products = await ProductModel.findByPk(id);
  let serviceResponse: ServiceResponse<Product>; 
  
  if (!products) { 
    serviceResponse = { status: 'NOT_FOUND', data: { message: 'Product not found' } }; 
    return serviceResponse; 
  } 

  serviceResponse = { status: 'SUCCESSFUL', data: products.dataValues }; 
  return serviceResponse; 
}

async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const error = validateParams(product);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
}

export default {
  create, list, getById,
};