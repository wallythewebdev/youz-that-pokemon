// random pokemon generator - which one are you?


/*

take details like 

age = stage in evoluation
birth month = element
day = ???? something who knows right now its fucking pokemon

*/ 

const request = require('request')
const chalk = require('chalk')


// create a limit for the amount of Pokemon called by the API (trying to keep this low but it will be filtered later by on specific pokemon that fit the users inputs)
let limit = 40;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${limit}&limit=${limit}`;

request({url: url, json: true}, (error, responce)=>{
    let pokeList = responce.body.results;
    let pokeSelect = Math.floor(Math.random() * Math.floor(limit))

    let yourPoke = pokeList[pokeSelect].name
    console.log(chalk.black.bgGreen(`I choose: ${yourPoke}`))
})