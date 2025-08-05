let userscore = 0 ;
let compscore = 0 ;
let userscorepoint = document.querySelector('#user_score');
let compscorepoint = document.querySelector('#comp_score');
let choice = document.querySelectorAll(`img`);
let img = document.querySelectorAll('img');
let user_choice = "" ;
let comp_choice = "" ;
let p = document.querySelectorAll('p');
let msg = document.querySelector('#msg') ;

const comp_func = () => {
 let randm_num = Math.floor(Math.random() * 3);
 comp_choice = img[randm_num].getAttribute("id");
 console.log("Comp's choice is",comp_choice);   
}


const winner = () => {
              
        if (comp_choice == user_choice){
            console.log("Match draw!!")
            msg.innerHTML = "Match Draw -_-"
            msg.style.backgroundColor = "white" ;
           
        }
        else if (comp_choice == "scissor"){
            if(user_choice == 'rock'){
                console.log('User Win!!')
                msg.innerHTML = "User Won :)"
                msg.style.backgroundColor = "green" ;
                userscore++;
                userscorepoint.innerText = userscore;
            }else if (user_choice == 'paper'){
                console.log('Comp Win!!')
                msg.innerHTML = "Comp Won :)"
                msg.style.backgroundColor = "red" ;
                compscore++;
                compscorepoint.innerText = compscore;
            }
        }
        else if (comp_choice == "paper"){
             if(user_choice == 'rock'){
                console.log('Comp Win!!')
                msg.innerHTML = "Comp Won :)"
                msg.style.backgroundColor = "red" ;
                compscore++;
                compscorepoint.innerText = compscore
            }else if (user_choice == 'scissor'){
                console.log('User Win!!')
                 msg.innerHTML = "User Won :)"
                msg.style.backgroundColor = "green" ;
                userscore++;
                userscorepoint.innerText = userscore;
            }   
        }
        else if(comp_choice == "rock") {
             if(user_choice == 'scissor'){
                console.log('Comp Win!!')
                 msg.innerHTML = "Comp Won :)"
                msg.style.backgroundColor = "red" ;
                compscore++;
                compscorepoint.innerText = compscore
            }else if (user_choice == 'paper'){
                console.log('User Win!!')
                 msg.innerHTML = "User Won :)"
                msg.style.backgroundColor = "green" ;
                userscore++;
                userscorepoint.innerText = userscore;
            } 
         }   
    
}

const user_func = () => {
    choice.forEach((img) => {
    img.addEventListener('click', () => {
    user_choice = img.getAttribute('id');
    console.log(`User's choice is`, user_choice);
    comp_func();
    winner();   
    score_chnger();    
    });
  });
};

const score_chnger = () => {
    let usermsg = document.querySelector('#user_msg');
    let compmsg = document.querySelector('#comp_msg');
    usermsg.innerHTML = `Your choice was ${user_choice}`
    compmsg.innerHTML = `Computers choice was ${comp_choice}`
}


user_func();