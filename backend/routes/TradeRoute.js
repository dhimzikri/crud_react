import express from "express";
import { 
    getUserTrader,
    getUserTradeById,
    saveUserTrade,
    updateUserTrade,
    deleteUserTrade
} from "../controllers/UserTradeController.js"
 
const routerTrade = express.Router();
 
router.get('/users_trd', getUserTrader);
router.get('/users_trd/:id', getUserTradeById);
router.post('/users_trd', saveUserTrade);
router.patch('/users/:id', updateUserTrade);
router.delete('/users/:id', deleteUserTrade);
 
export default routerTrade;