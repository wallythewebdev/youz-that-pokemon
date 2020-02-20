// random pokemon generator - which one are you?


/*

take details like 

age = stage in evoluation
birth month = element
day = ???? something who knows right now its fucking pokemon

*/ 

const request = require('request')
const chalk = require('chalk')

const pokedex = require('./utils/pokedex')



pokedex(40, (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data)
})