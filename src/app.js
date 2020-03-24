// find birthdays out of specific punters and use custom imgs for them, like 
// tom and julzes staff part cake photo as cake-o-mon


// load express && handlebars HBS
const express = require('express');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

// load in the requied modules

const request = require('request')
const chalk = require('chalk')
const path = require('path')

// load in functions

// get URL based off users SIGN

const getURL = require('./utils/getURL')

const pokedex = require('./utils/pokedex.js')
const pokeType = require('./utils/pokeType.js')
const pokeImage = require('./utils/pokeImage')
// const elementSign = require('./utils/elementSign.js')


// set up app for express 

const app = express()

// set up paths for partials / views
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const publicDir = path.join(__dirname, '../public')
console.log(publicDir)

// set up app to use the partials / views hbs files
app.set('view engine', 'hbs')
app.set('views', viewPath)

// hbs set up to render partials when needed
hbs.registerPartials(partialsPath)

// set up static Dir to serve
app.use(express.static(publicDir))


// set up user input <<< this will be handled by the browser
// let input = process.argv[2];

// let input = "Leo"

// function for the element sign <<< this will be handled by the browser for finished build
// elementSign(input)

app.get('', (req, res) => {
    if(!req.query.sign){
        return res.render('index', {
            title: 'You-Z<br>that<br>pokemon!',
            // error: 'You need to select your star sign? otherwise your pokemon will just hide from you......', << 
            // footer
            author: "http://wallythewebdev.com/",
            terms: 'This was developed using the PokeAPI'
        })
    }
    res.render('index', {
        title: 'Index File',
        pokemonLink: utilFunctions.elementSign(req.query.sign)
    })
})


app.get('/sign', (req, res) => {
    debugger;
    if(!req.query.sign){
        return res.send({
            error: 'Your star sign in the key, otherwise your pokemon will just hide from you!'
        })
    }

    // send back using res.send the obj details for the pokemon

    let infoCall = getURL(req.query.sign);
    let url = infoCall.url
    let element = infoCall.element

    // returns obj of data *name *url
    debugger;
    // pokeType function / url for http request, callback function 
    pokeType(url, (error, pokeObj) => {
        if(error){
            res.send({
                error
            })
        }
        // return return second function to get pokemon image
            pokeImage(pokeObj.pokeUrl, pokeObj, (error, pokeDeets) => {
                res.send({

                    // user input ---
                    sign: req.query.sign,
                    
                    // pokeObj returned data
                    name: pokeObj.pokeName,
                    pokeUrl: pokeObj.pokeUrl,

                    // pokeDeets returned data
                    sprites: pokeDeets.sprites,
                    element
                })
            })
    })

    

})




app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})