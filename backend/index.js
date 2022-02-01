const express = require('express')
const cors = require('cors') //wymagane, przesyłanie danych między serwerem a stroną
const bodyParser = require('body-parser') //parsowanie
const sequelize = require('sequelize') //orm

const bazadanych = new sequelize('aplikacja', 'root', 'zaq1@WSX', { host: 'localhost', dialect: 'mysql' })
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
}, {
    createdAt: false, //bez tego wywala error
    updatedAt: false  //bez tego też
})

const profile = bazadanych.define('profile', {
    Login: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    Haslo: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    idprofile: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'profile'
})

const apk = express()
apk.use(cors()) //wymagane
apk.use(express.json())


apk.post('/login', (req, res) => {
    console.log("test wykonywania 123")

    profile.findOne({
        where: { login: req.body.login }
    }).then(dane => {
        if (!dane) return res.sendStatus(404)
        if (dane.dataValues.Haslo === req.body.haslo) {
            res.sendStatus(200)
        }
        else {
            res.sendStatus(404)
        }
    })
}
)


apk.post('/obliczenia', (req, res) => {
    if (req.body._dystans < 0.01 || req.body._paliwo < 0.01) return
    profile.findOne({ where: { login: req.body.login } }).then(dane => {
        danes.create({  //tworzenie nowych rekordów
            Dystans: parseFloat(req.body._dystans),
            Paliwo: parseFloat(req.body._paliwo),
            Wynik: parseFloat(req.body._wynik),
            idProfilu: dane.dataValues.idprofile
        }, { fields: ['Dystans', 'Paliwo', 'Wynik', 'idProfilu'] })
    })
})


apk.post('/update', (req, res) => {
    danes.update({  //aktualizowanie rekordów - funkcja z sequalize
        Dystans: parseFloat(req.body._dystans),
        Paliwo: parseFloat(req.body._paliwo),
        Wynik: parseFloat(req.body._wynik),
    }, { where: { id: req.body.id } })
})


apk.get('/pobierz/:user', (req, res) => {
    console.log('wykonuje się czy coś')
   profile.findOne({where:{Login:req.params.user}}).then(daneuzytkownika => {
       console.log(req.params.user)
       danes.findAll({where:{idProfilu:daneuzytkownika.idprofile}}).then(dane => res.send(dane))
   })
})








apk.listen(3001, () => {
    console.log("Listening on port 3001");
})