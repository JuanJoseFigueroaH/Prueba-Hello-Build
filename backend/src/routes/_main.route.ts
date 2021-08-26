import { Router } from 'express';
import authRoute from './auth.route';

const mainRoute = Router();

mainRoute.use('/auth', authRoute);

export default mainRoute;
