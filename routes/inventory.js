let express=require('express');
let route=express.Router();

let mongoose=require('mongoose');
const inventory = require('../models/inventory');
let Inventory=require('../models/inventory');

route.get('/list',function(req,res,next){
    Inventory.find((err,inventoryList)=>{  //first parameter incase of error, second parametr incase of success
    
    if(err)
      {
        return console.error(err);
      }
    else{
        console.log(inventoryList);
    }
    });
});

module.exports=route;