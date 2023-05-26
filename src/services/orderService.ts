import { Sequelize } from 'sequelize';
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

export default {
  list,
};