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
        const userTrades = await UserTrader.findById(req.params.id);
        res.json(userTrades);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUserTrade = async (req, res) => {
    const user = new UserTrader(req.body);
    try {
        const insertedusertrd = await user.save();
        res.status(201).json(insertedusertrd);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUserTrade = async (req, res) => {
    try {
        const updatedusertrd = await UserTrader.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedusertrd);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteUserTrade = async (req, res) => {
    try {
        const deletedusertrd = await UserTrader.deleteOne({_id:req.params.id});
        res.status(200).json(deletedusertrd);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}