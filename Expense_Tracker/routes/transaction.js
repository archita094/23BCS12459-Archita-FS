const express=require('express');
const router=express.Router();
const {getTransactions, addTransactions, deleteTransactions}=require('../controllers/transactions');

router
.route('/')
.post(addTransactions)
.get(getTransactions);

router
.route('/')
.delete(deleteTransactions);



module.exports=router;