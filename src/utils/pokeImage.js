const request = require('request')

const pokeImage = (url, basePokemonObj, pokeDeets) => {

    request({url, json:true}, (error, repsonce) => {
        if(error){console.log('Low Level Error in URL')}

        let sprites = repsonce.body.sprites.front_default;
        let description = repsonce.body

        pokeDeets(undefined, {
            sprites
        })
    })


}


module.exports = pokeImage