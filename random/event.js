const pokedex = require('./utils/pokedex')


// add user name / sign here for use later for search
let user = {
    name: '',
    starSign: ''
}


        function getUserDetails(){
            user.name = document.querySelector('input[name="name"]').value
            user.starSign = document.querySelector('select').value

            let user = elementSign(user.starSign);
            console.log(user)
        }


        // event listeners

        function setUp(){
            console.log('Init started')
            // click events
            document.body.addEventListener('click', (e)=>{
                e.target.id === 'submit' ? getUserDetails() : null
            })
        }

    
// init 
setUp()
