// importowanie modułów
const sequelize = require("sequelize") //orm do mysql
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const db = new sequelize("aplikacja","root","zaq1@WSX",{host:"localhost",dialect:"mysql"})
const model_dane = db.define("danes",{
test: sequelize.STRING(45)
},{timestamps: false})

app.get("/serwer", (req, res) => {
res.send("test")
model_dane.create({test: "przyklad"})
})





app.listen(3001, ()=>{
console.log("3001")
})

