function inputValue(val){
    document.getElementById('screen').value+=val
}

function calculate(){
    try{
        const result = eval(document.getElementById('screen').value)
        document.getElementById('screen').value = result
    }
    catch{
        document.getElementById('screen').value = "Error"
        console.error('not valid');
    }
}

function clearScrean(){
    document.getElementById('screen').value= '';
}

function deleteChar(){
    let screen = document.getElementById('screen');
    let charecters = screen.value;
    if(charecters.length>1){
        screen.value = charecters.slice(0,-1);
    }
    else{
        screen.value = "0";
    }
    
}