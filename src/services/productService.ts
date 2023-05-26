import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({
  name,
  price,
}: ProductInputtableTypes): string | null {
  if (!name) return '"name" is required';
  if (!price) return '"price" is required';  
  return null;
}

function validateParams2({
  name,
  price,
}: ProductInputtableTypes): string | null {
  if (typeof name !== 'string') return '"name" must be a string';
  if (name.length < 3) return '"name" length must be at least 3 characters long';
  if (typeof price !== 'string') return '"price" must be a string';
  if (price.length < 3) return '"price" length must be at least 3 characters long';
  return null;
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
}

async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const error = validateParams(product);
  const error2 = validateParams2(product);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }
  if (error2) {
    responseService = { status: 'INVALID_TYPE', data: { message: error2 } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
}

export default {
  create, list,
};