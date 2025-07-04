import express from 'express';
import * as user from '../controllers/users.js';

const router = express.Router();

router.get('/', user.getAllUsers);
router.get('/:id', user.getUserById);
router.post('/', user.createUser);
router.patch('/:id', user.updateUserParameter);
router.delete('/:id', user.deleteUserById);
export default router;