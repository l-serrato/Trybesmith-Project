/* import { Sequelize } from 'sequelize';
import ProductModel from '../database/models/product.model';
import OrderModel, {
  OrderSequelizeModel } from '../database/models/order.model';
// import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function list(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel
    .findAll({
      include: [{
        model: ProductModel,
        as: 'productIds',
        attributes: [] }],
      attributes: ['id', 'userId', [Sequelize
        .fn('JSON_ARRAYAGG', Sequelize
          .col('productIds.id')), 'productIds']],
      group: ['Order.id'],
      raw: true });

  return { status: 'SUCCESSFUL', data: orders };
}

async function create(
  order: OrderInputtableTypes,
): Promise<ServiceResponse<Order>> {
  let responseService: ServiceResponse<Order>;

  const error = validateParams(order);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newOrder = await OrderModel.create(order);

  responseService = { status: 'SUCCESSFUL', data: newOrder.dataValues };

  return responseService;
}

export default {
  create, list,
}; */