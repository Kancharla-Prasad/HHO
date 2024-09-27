import { transactions } from "../models/TransactionModel.js";
import mongoose from "mongoose";

//create route
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
        return res.json({"Message":"Succesfully Uploaded the transaction"});


    }catch(error){
        console.log(error.message);
        return res.json({"Error":"True","Message":error.message});
    }
}

//update route
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

//delete route
export const deleteTransaction = async (req,res)=>{
    try{
        const id = req.params.id;
        const deletedTransaction = await transactions.findByIdAndDelete(id);
        if(!deletedTransaction){
            return res.json({"Status":"Error","Message":"Transaction is not deleted"});
        }
        res.status(200).json({"Status":"Success","Message":"Transaction deleted successfully"});
    }catch(error){
        console.log(error.message);
        return res.json({'Status':"Error","Message":error.message});
    }
}

//get route
export const getAllTransactions = async (req,res)=>{
    try{
        const allTransactions = await transactions.find({});
        res.status(200).json(allTransactions);
    }catch(err){
        return res.json({"Status":"Error","Message":err.message});
    }
}

//get on search
export const getMatchedTransactions = async (req,res)=>{
    try{
        const searchTerm = req.query.search;
        let amountSearch = null;
        let dateSearch = null;

        if (!isNaN(searchTerm)) {
            amountSearch = Number(searchTerm);
        }
        const parsedDate = new Date(searchTerm);
        if (!isNaN(parsedDate.getTime())) { // Check if it's a valid date
            dateSearch = parsedDate; // Valid date
        }

        const query = {
            $or: [
                { purpose: { $regex: searchTerm, $options: 'i' } } // Searching in purpose field
            ]
        };
        // Adding date search to query if valid
        if (dateSearch) {
            const startOfDay = new Date(dateSearch.setHours(0, 0, 0, 0));
            const endOfDay = new Date(dateSearch.setHours(23, 59, 59, 999));
            query.$or.push({ date: { $gte: startOfDay, $lt: endOfDay } }); // Match all entries within the date
        }
        // Adding amount search to query if valid
        if (amountSearch !== null) {
            query.$or.push({ amount: { $eq: amountSearch } });
        }

        // Fetch matching transactions
        const matchingTransactions = await transactions.find(query);

        return res.status(200).json(matchingTransactions);

    }catch(err){
        return res.json({"Status":"Error","Message":err.message});
    }
}