const { Router } = require('express');
const { Player, Puntaje, puntajePlayer } = require('../db');
const axios = require('axios');

const router = Router();


router.post('/player/:player', async (req, res, next) => {
    const { player } = req.params
    console.log("player",player)
    try {
        let crearPlayer = await Player.create({
            player
        })
        res.json('se creo usuario ')
    } catch (error) {
        next(error)
    }

})
router.get('/player/:player', async (req, res, next) => {
    const { player } = req.params
    console.log("player",player)
    try {
        let crearPlayer = await Player.findOne({
            where:{
                player:player}
        })
        res.json(crearPlayer)
    } catch (error) {
        next(error)
    }

})
router.post('/puntaje', async (req, res, next) => {
    const { player, score } = req.body

    try {


        let Scores = await Puntaje.findOrCreate({ score, player})
        console.log('se agrego el puntaje');
        console.log("puntajessss",Scores.datavalue)
        res.json(' puntaje agregado')
        //     let currentPlayer = await Player.findOne({
        //         where:{
        //             player: player
        //         }
        //     })
        //     if(currentPlayer){

        // currentPlayer.addPuntaje(scores)

        //     }else{

        //         crearPlayer.addPuntaje(Scores)
        //         res.json('se creo usuario y puntaje agregado')
        //     }


    } catch (error) {
        next(error)
    }
})
router.get('/puntaje/:player', async (req, res, next) => {
    const { player } = req.params
try {
       const puntajes = await Puntaje.findAll({
        where: {
           player:player
        },
        //  include:{
        //   model: Puntaje,
        //   atribute:[" score"]
        //  }
    })
    // let  puntajesId = puntajes.map((p) => p.scoreId )

    puntajes?.map((p) => p.dataValues.score)
    console.log(puntajes)
    res.json(puntajes)
} catch (error) {
     next(error)
}
 
})

module.exports = router