import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRoute = Router();
const authController = new AuthController();

authRoute.post(
  '/',
  authController.autenticarUsuario
);

/* authRoute.get(
  '/',
  authController.usuarioAutenticado
); */

export default authRoute;
