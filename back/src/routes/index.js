const { Router } = require('express');
const { Player, Puntaje,  } = require('../db');

const router = Router();


router.post('/player/:player', async (req, res, next) => {
    const { player } = req.params
    console.log("player", player)
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
    console.log("player", player)
    try {
        let crearPlayer = await Player.findOne({
            where: {
                player: player
            }
        })
        res.json(crearPlayer)
    } catch (error) {
        next(error)
    }

})
router.post('/puntaje', async (req, res, next) => {
    const { player, score } = req.body

    try {
        let Scores = await Puntaje.create({ score, player })
        console.log('se agrego el puntaje');
        console.log("puntajessss", Scores.datavalue)
        res.json(' puntaje agregado')
    } catch (error) {
        next(error)
    }
})
router.get('/puntaje/:player', async (req, res, next) => {
    const { player } = req.params
    try {
        const puntajes = await Puntaje.findAll({
            where: {
                player: player
            },
        })


        puntajes?.map((p) => p.dataValues.score)
        console.log(puntajes)
        res.json(puntajes)
    } catch (error) {
        next(error)
    }

})

router.get('/bestpuntaje', async (req, res, next) => {
    try {
        const bestPuntajes = await Puntaje.findAll()
        mejoresPuntajes = bestPuntajes?.map((p) => {
            return (
                [p.dataValues.score, p.dataValues.player]
            )
        }
        )
        var top5 = mejoresPuntajes.sort(function (a, b) { return b[0] - a[0]; }).slice(0, 5);
        console.log(top5, "top5")
        res.json(top5)
    } catch (error) {
        next(error)
    }

})
module.exports = router