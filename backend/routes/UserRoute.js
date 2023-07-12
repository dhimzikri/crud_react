import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js"
import { 
    getUserTrader,
    getUserTradeById,
    saveUserTrade,
    updateUserTrade,
    deleteUserTrade,

} from "../controllers/UserTradeController.js"
 
const router = express.Router();
 
// user_trader_route
router.get('/users_trd', getUserTrader);
router.get('/users_trd/:id', getUserTradeById);
router.post('/users_trd', saveUserTrade);
router.patch('/users_trd/:id', updateUserTrade);
router.delete('/users_trd/:id', deleteUserTrade);
// end_of_trader_route

// dashboard_route
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
// end_of_dashboard_route

export default router;