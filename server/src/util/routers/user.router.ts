import express from 'express';
import { UserController } from '../../controllers/user.controller';

const UserService: UserController = new UserController();
const UserRouter = express.Router();

UserRouter.post('/', UserService.CreateUser);

UserRouter.get('/', UserService.GetUserById);

UserRouter.put('/:id', UserService.UpdateUser);

UserRouter.delete('/:id', UserService.DeleteUser);

export default UserRouter;

//  TODO: we do not need the :id parameter anymore as that info is stored in the token
