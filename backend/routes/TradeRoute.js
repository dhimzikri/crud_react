import express from "express";
import { 
    getUserTrader,
    getUserTradeById,
    saveUserTrade,
} from "../controllers/UserTradeController.js"
 
const routerTrade = express.Router();
 
router.get('/users_trd', getUserTrader);
router.get('/users_trd/:id', getUserTradeById);
router.post('/users_trd', saveUserTrade);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
 
export default routerTrade;