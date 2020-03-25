const request = require('request')

const pokeImage = (url, basePokemonObj, pokeDeets) => {

    request({url, json:true}, (error, repsonce) => {
        if(error){console.log('Low Level Error in URL')}

        let sprites = repsonce.body.sprites.front_default;

        let spriteList = repsonce.body.sprites;

        // if spirte returns null - reRun code again

        // console.log(repsonce.body.sprites) // << bug fixing code to view responces
        // console.log(spriteList)
        let description = repsonce.body

        pokeDeets(undefined, {
            sprites
        })
    })


}


module.exports = pokeImage