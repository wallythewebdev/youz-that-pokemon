const request = require('request')
const chalk = require('chalk')



// main function for the return of data to the user
const pokedex = function(limit, callback){
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${limit}&limit=${limit}`;

    request({url: url, json:true}, (error, responce) => {
        if(error){
            callback('Connection issue, please check network', undefined)
        } else if (responce.body.results.length === 0 || responce.body.results === null){
            callback('error, please try to add more details or try different details', undefined)
        } else {
            let pokeList = responce.body.results;
            let pokeSelect = Math.floor(Math.random() * Math.floor(limit))

            // select your pokemon name from the obj
            let yourPoke = pokeList[pokeSelect].name
            // print the pokemon name to the user
            console.log(chalk.black.bgGreen(`I choose: ${yourPoke}`))

            callback(undefined, {
                pokemon: yourPoke
            })
        }
    })

}



module.exports = {
    pokedex: pokedex
}