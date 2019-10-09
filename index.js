const onesPlace = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const tentoNineteen = ["","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen"]
const tensPlace = ["","ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ]
const hundredsPlace = ["","one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"]

function numberstoWords() {
    for (let hundreds = 0; hundreds < hundredsPlace.length; hundreds++){
        for( let tens = 0; tens < tensPlace.length; tens++){
            for(let ones = 0; ones < onesPlace.length ; ones++) {
                if ( tens === 1&& ones !== 0  ){
                document.write(hundredsPlace[hundreds] + " " + tentoNineteen[ones] + "<br>")

                } 
                else {
                    document.write (hundredsPlace[hundreds] + " " + tensPlace[tens] + " " + onesPlace[ones] + "<br>")
                }

           
              

           }
        }
    }
    
    
    document.write ("one thousand")
    }
    
numberstoWords();


