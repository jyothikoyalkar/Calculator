function display(value){ // display user entered data
    document.getElementById('display-bar').innerHTML+=value
}

function clearButton(){ // clearing the display bar data 
    document.getElementById('display-bar').innerHTML = ''
}

function backSpace(){ // delete the last value of display bar
    let input = document.getElementById('display-bar')
    input.innerText = input.innerText.substring(0,input.innerText.length-1)
    
}

function calculate(){ // calculation of data of display bar
    var result = document.getElementById('display-bar')
    var values = result.innerText;
    
    if(values == ''){ // if user enter '=' before entering the equation
        document.getElementById('display-bar').innerHTML = '';

    }else if(values.includes('%') == true){ // for percentage
        let replacedValue = values.replace('%','/100')
        result.innerText = eval(replacedValue);

    }
    else{
        result.innerText= eval(values)
    }
}
