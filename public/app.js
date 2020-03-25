// define variables

let form, sign, poke_main_info, poke_image, poke_info;


// querySelectors for elements

form = document.querySelector('form');
poke_main_info = document.getElementById('pokemon_Main_Info')
poke_image = document.getElementById('pokemon_Main_Image')
pokemon_info = document.getElementById('pokemon_info')


// event listener for the form submit

form.addEventListener('submit', (e)=>{
    // prevent the defualt re-load of the page
    e.preventDefault();

    // play animation of pokemon searching -
    // text say loading!

    poke_main_info.innertext ='Loading.......'

    // sign value user chose << inside event listener to listen to the sign on the event being fired
    sign = document.querySelector('select').value;

    fetch(`/sign?sign=${sign}`).then((responce)=>{
        responce.json().then((data)=>{
            console.log(data)
            if(data.error){
                poke_main_info.innerText =``;
                poke_image.src="assets/img/pokeBall.png"
                pokemon_info.innerText=`${data.error}`
                return
            }
            poke_main_info.innerText =`${data.name}`
            // data url - has the pokemon info on it including image
            // either will be adding request here or in pokeType.js
            poke_image.src =`${data.sprites}`
            pokemon_info.innerText =`Your a ${sign} and your pokemon is a ${data.element} element`
            console.log(data)
        })
    })
})

// fetch url with the value from the user input

// return the values to the on screen elememts