import UserTrader from "../models/UserTrader.js"

export const getUserTrader = async (req, res) => {
    try {
        const userTrades = await UserTrader.find();
        res.json(userTrades);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUserTradeById = async (req, res) => {
    try {
        const userTrade = await UserTrader.findById(req.params.id);
        res.json(userTrade);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUserTrade = async (req, res) => {
    const user = new UserTrader(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}