var express=require("express")
var app=express()
var fs=require("fs")
var path=require("path")
require("dotenv").config()
const port=process.env.port||3000

app.set("view engine","ejs")

var list_ele=[]
var images=[]

app.get("/",async(req,res)=>{
    res.send("welcome")
})
app.get("/drive",async (req,res)=>{
    fs.opendir("C:/Users/HP/Documents/assignment",async (err,data)=>{
        if(err){
            throw err
        }else{
            for await(const dirent of data)
            // str+=`${dirent.name}<br>`;
            list_ele.push(dirent.name)
            console.log(list_ele)
        }
        var data={}
        for(var i=0;i<list_ele.length;i++){
            if(path.extname(list_ele[i])===".csv"){
                data[list_ele[i]]="https://bit.ly/2KM8snP"
            }else if(path.extname(list_ele[i])===".jpg"){
                data[list_ele[i]]="https://bit.ly/366aas6"
            }else if(path.extname(list_ele[i])===".docx"){
                data[list_ele[i]]="https://bit.ly/2JaWLqa"
            }else if(path.extname(list_ele[i])===".mp3"){
                data[list_ele[i]]="https://bit.ly/3nWFy2q"
            }else if(path.extname(list_ele[i])===".pdf"){
                data[list_ele[i]]="https://bit.ly/2HIbMPA"
            }else if(path.extname(list_ele[i])===".pptx"){
                data[list_ele[i]]="https://bit.ly/3m9XXIE"
            }else if(path.extname(list_ele[i])===".mp4"){
                data[list_ele[i]]="https://bit.ly/3l9GDST" 
            }else{
                data[list_ele[i]]="https://bit.ly/2JcwEPp"
            }
        }
        res.render("index",{files:list_ele,data:data})
    })
}).listen(port,(err)=>{
    if(err){
        throw err
    }else{
        console.log("completed")
    }
})