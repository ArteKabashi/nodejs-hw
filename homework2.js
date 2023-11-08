
/*
1) Krijoni nje funksion qe pranon si parameter nje numer, nese numri eshte cift atehere ne konzole duhet te shtypet 
"Numri i dhene eshte cift", perndryshe duhet te shtypet "Numri i dhene eshte tek"
*/

function checkIfNumberIsEven(number){
    if(number%2 == 0){
        console.log(`Numri ${number} eshte cift`)
    }else{
        console.log(`Numri ${number} eshte tek`)
    }
}

function checkIfInputIsNumber(number){
    if(typeof number === "number"){
        checkIfNumberIsEven(number)
    }else{
        console.log("Nuk eshte numer")
    }
}

checkIfInputIsNumber("")
checkIfInputIsNumber(2)
checkIfInputIsNumber(4)
// checkIfNumberIsEven("")
// checkIfNumberIsEven(342)





/*
2) Krijoni nje funksion qe kthen:
a) temperaturen nga grade celsius ne grade fahrenheit - formula:  °F = (°C * 9/5) + 32)
b) temperaturen nga grade fahrenheit ne grade celsius - formula:  °C = 5/9(°F-32)
*/
console.log("\n")

function converTemperature(temperature,grade){
    const gradeToLowerCase = grade.toLowerCase()
    if(gradeToLowerCase == 'c'){
        const temperatureToCelcius = 5/9*(temperature-32)
        console.log(`${temperature}F = ${temperatureToCelcius}C`  )
    }else if(gradeToLowerCase == 'f'){
        const temperatureToFahrenheit = temperature * 9/5 + 32

       console.log(`${temperature}C = ${temperatureToFahrenheit}F` )

    }else{
        console.log("wrong input")
    }
}

converTemperature(0,'c')
converTemperature(0,'f')


/*
3) Krijoni nje kalkulator qe bene llogaritje bazike:
- Mbledhje
- Zbritje
- Shumezim
- Pjestim

*/
console.log("\n")
function calculator(number1,number2,operator){
    if(operator == "+"){
        console.log(`${number1} + ${number2} = ${number1+number2}`)
    }else if(operator == "-" ){
        console.log(`${number1} - ${number2} = ${number1-number2}`)
    }else if(operator == "*"){
        console.log(`${number1} * ${number2} = ${number1*number2}`)
    }else if(operator == "/"){
        console.log(`${number1} / ${number2} = ${number1/number2}`)
    }else{
        console.log("wrong input")
    }          
}

calculator(3,5,"+")
calculator(3,5,"-")
calculator(3,5,"*")
calculator(3,5,"/")