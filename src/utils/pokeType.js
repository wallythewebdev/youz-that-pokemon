const request = require('request')
const path = require('path')
/*
    @returns object of pokemon name and url
*/ 
const pokeType = (url, callbackA) => {
    // this request to get the number of pokemon
    request({url, json: true}, (error, { body }) => {
            // define return data
            let pokemon = body.pokemon;
            let randomNumber = Math.floor(Math.random() * pokemon.length);
            // callback to return OBJ
            callbackA(undefined, {
                pokeName:  pokemon[randomNumber].pokemon.name,
                pokeUrl: pokemon[randomNumber].pokemon.url,
            })
        })
    }    

    module.exports = pokeType
