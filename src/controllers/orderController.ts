import { Request, Response } from 'express';
import orderService from '../services/orderService';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function list(_req: Request, res: Response) {
  const serviceResponse = await orderService.list();
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }
  
  res.status(200).json(serviceResponse.data);
}

export default {
  list,
};