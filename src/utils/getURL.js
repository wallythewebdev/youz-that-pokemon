const request = require('request')


// return the URL for the pokemon

const getUrl = (sing)=>{
    debugger;
    let element

    switch(sing){
        case "Aries":
        case "Leo":
        case "Sagittarius":
        element = "fire"
        break;

        case "Taurus":
        case "Virgo":
        case "Capricorn":
        element = "ground"
        break;

        case "Gemini":
        case "Libra":
        case "Aquarius":
        element = "flying"
        break;

        case "Cancer":
        case "Scorpio":
        case "Pisces":
        element = "water"
        break;
    }


    // sing to generate type for the below URL

    let url = `https://pokeapi.co/api/v2/type/${element}`;

    return {
        url, 
        element
    }
}

module.exports = getUrl