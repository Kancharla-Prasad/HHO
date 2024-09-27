import { transactions } from "../models/TransactionModel.js";
import mongoose from "mongoose";

export const createTransaction = async (req,res)=>{
    try{
        const {transaction_type, amount, purpose} = req.body;
        if(!transaction_type || !amount || !purpose){
            res.json({"Error":true, "Message":"All fileds are required"});
        }
        const newTransaction = {
            date: Date.now(), transaction_type, amount, purpose    
        }

        const result = await transactions.create(newTransaction);
        if(!res){
            return res.json({"Error":"True","Message":"Error in pushing data into database"});
        }
        return res.json({"Message":"Succesfully Updated the transaction..."});


    }catch(error){
        console.log(error.message);
        return res.json({"Error":"True","Message":error.message});
    }
}

export const updateTransaction= async (req,res)=>{
    try{
        const {transaction_id, date} = req.body; //for reference
        const {new_transaction_type,new_amount,new_purpose} = req.body // for any updation
        if(!transaction_id){
            return res.json({"Status":"Error","Message":"Transaction Id was not given"});
        }
        if(!new_transaction_type || !new_amount || !new_purpose){
            res.json({"Status":"Error", "Message":"All fileds are required"});
        }

        const updated_data = {
            transaction_type : new_transaction_type,
            amount : new_amount,
            purpose : new_purpose,
            date : date
        }

        const transaction_to_be_updated = await transactions.findByIdAndUpdate(transaction_id, updated_data, {new:true}); 
        if(!transaction_to_be_updated){
            return res.json({"Status":"Error","Message":"Transaction Not Updated"})
        }
        res.json({"Status":"Success","updatedData":updated_data});

    }catch(error){
        console.log(error.message);
        return res.json({"Status":"Error","Message":error.message});
    }
}