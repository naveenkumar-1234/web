import express from 'express'
import mysql from 'mysql2'

const app=express()


const mysql=mysql()

const db=mysql.createConnection({
    host:"",user:"",password:"",database:""
})


app.listen('8806',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})