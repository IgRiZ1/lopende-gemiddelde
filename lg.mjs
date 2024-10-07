import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal  = 0 ; 
let gemidelde = 0 ; 
let number = 0 ; 


do{
    getal += parseFloat(await userInput.question('geef een getal ? '))

    number++
    gemidelde = getal/ number
    console.log(gemidelde);
    
    
}while( gemidelde < 25){
    console.log('nieks voor u zebi ')
}

process.exit()






process.exit()