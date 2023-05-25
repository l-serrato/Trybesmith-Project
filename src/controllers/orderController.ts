/* import { Request, Response } from 'express';
import orderService from '../services/orderService';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function list(_req: Request, res: Response) {
  const serviceResponse = await orderService.list();
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }
  
  res.status(200).json(serviceResponse.data);
}

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const serviceResponse = await orderService.create({ name, price, orderId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }

  res.status(201).json(serviceResponse.data);
}

export default {
  create, list,
}; */