
let min = 1;
let max = 100;

let random_number = Math.floor(Math.random()*(max-min+1))+min;
console.log(random_number)
let attempts=0;
const maxAttempts = 5;

function Guessing_num(){
    
    let inputElement = document.getElementById('number');
    let inputValue = parseInt(inputElement.value);
    let message = document.getElementById('matchingNum')
    attempts++;
    if (isNaN(inputValue)){
        document.getElementById('matchingNum').innerHTML=`Please enter a valid input`;
        return;
    }
    if (inputValue<=100){
        if (attempts<=maxAttempts){
            console.log(attempts)
            document.getElementById('count').innerHTML=`now ${attempts} attempt is done...`
            if(inputValue>(random_number*2)){
                message.innerHTML=`your number is too higher`
                message.style.color = 'red';
            }
            else if (inputValue>random_number){
                message.innerHTML=`your number is higher`
                message.style.color = 'red';
            }
            else if(inputValue<Math.floor(random_number/2)){
                message.innerHTML=`your number is too lower`
                message.style.color = 'red';
            }
            else if(inputValue<random_number){
                message.innerHTML=`your number is lower`
                message.style.color = 'red';
            }
            else{
                message.innerHTML=`Yes you guessed correct`
                message.style.color = 'green';
            }

            if (attempts===maxAttempts){
                message.innerHTML+=`<br>You've used all attempts. The correct number was ${random_number} !!!! `;
                message.style.color = 'orange';
            }
        }   
        else{
            message.innerHTML=`You have crossed the guessings`
            resetGame();
        } 
        inputElement.value="";
    }
    else{
        message.innerHTML=`Your guess is out of range!!!`
        message.style.color = 'red';
    }

}

function resetGame(){
    // Reset attempts counter
    attempts = 0;
    
    // Generate a new random number
    random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random_number);  // You can remove this line if you don't want to log it

    // Clear any displayed messages
    document.getElementById('matchingNum').innerHTML = '';
    document.getElementById('count').innerHTML = '';
}

document.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        Guessing_num()
    }
})



