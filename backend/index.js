const express = require('express')
const cors = require('cors') //wymagane, przesyłanie danych między serwerem a stroną
const bodyParser = require('body-parser') //parsowanie
const sequelize = require('sequelize') //orm

const bazadanych = new sequelize('aplikacja','root','zaq1@WSX',{host:'localhost',dialect:'mysql'})
const danes = bazadanych.define('danes', {
    Dystans: {
        type: sequelize.DataTypes.FLOAT,
        allowNull: false,
        
    },
    Paliwo: {
        type: sequelize.DataTypes.FLOAT,
        allowNull: false,
       
    },
    Wynik: sequelize.DataTypes.FLOAT,
    idProfilu: sequelize.DataTypes.INTEGER
},{
    createdAt:false,
    updatedAt:false
})


const apk = express()
apk.use(cors())
apk.use(express.json())


apk.post('/obliczenia', (req,res) => {
    if(req.body._dystans<0.01 || req.body._paliwo<0.01) return
        danes.create({  //tworzenie nowych rekordów
        Dystans: parseFloat(req.body._dystans),
        Paliwo: parseFloat(req.body._paliwo),
        Wynik: parseFloat(req.body._wynik),
        idProfilu: 0
    }, {fields:['Dystans','Paliwo','Wynik','idProfilu']})

})

apk.post('/update', (req,res) => {
    danes.update({
        Dystans: parseFloat(req.body._dystans),
        Paliwo: parseFloat(req.body._paliwo),
        Wynik: parseFloat(req.body._wynik),
    }, {where:{id:req.body.id}})
})

apk.get('/pobierz', (req,res) => {
        danes.findAll().then(wartosci=>{
            res.send(wartosci)
        })
})

apk.listen(3001, () => {
    console.log("Listening on port 3001");
  })