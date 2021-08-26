import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRoute = Router();
const authController = new AuthController();

/**
 * @swagger
 * /municipalities/create:
 *  post:
 *    description: "Create Municipalities"
 *    tags:
 *      - Municipalities
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: nombre
 *        in: formData
 *        required: true
 *        type: string
 *      - name: departamento
 *        in: formData
 *        type: ObjectId
 *    responses:
 *       201:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Neiva",
 *              "departamento": 606c8c24a4179839540ab168,
 *              "created_at": "2021-06-10T01:07:31.210Z",
 *              "updated_at": "2021-06-10T01:10:30.126Z"
 *           }
 *       400:
 *         description: bad request
 *         examples:
 *           application/json: {
 *              "errors": [
 *                  {
 *                    "message": "Name is required",
 *                    "field": "name"
 *                  }
 *              ]
 *           }
 */
authRoute.post(
  '/',
  authController.autenticarUsuario
);

/* authRoute.get(
  '/',
  authController.usuarioAutenticado
); */

export default authRoute;
