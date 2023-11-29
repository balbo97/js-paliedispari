// 1- PALINDROMA 

// RICHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA 
let world = prompt('inserisci una parola')

// CREO UNA FUNZIONE CHE STABILISCA SE LA PAROLA E' PALINDROMA 
function palindroma(x){
    
    // CREO UNA CONDIZIONE PER LA QUALE IL CONTRARIO DELLA PAROLA CORRISPONDE ALLA PAROLA 
    if(x.split('').reverse().join('') == x ){
        console.log('La parola è palindroma')
    }
    else{
        console.log('La parola non è palindroma')
    }
    

}

// UTILIZZO LA FUNZIONE 
palindroma(world);

//------------------------------------------------------------------------------------------//

// 2- PARI O DISPARI 

// CHIEDO ALL'UTENTE DI INSERIRE PARI O DISPARI 
let even_odd = prompt('inserisci pari o dispari');
console.log(even_odd);

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA UNO A CINQUE 
let player_number = parseInt(prompt('inserisci un numero da uno a cinque'));
console.log(player_number)

// CREO UNA FUNZIONE PER CREARE UN NUMERO RANDOM DA 1 A 5 
function randomNumber (){
   return Math.floor(Math.random()*5 + 1)
}
let computer_number = randomNumber()
console.log(computer_number)

// CREO UNA FUNZIONE CHE SOMMI I DUE NUMERI E CONTROLLI SE SIANO PARI O DISPARI 
function somma(x,y){
    
    if((x + y)%2 == 0){
        return 'pari';
    }
    return 'dispari' 
}

let result = somma(player_number, computer_number);
console.log(result)


// CONFRONTO IL RISULTATO FINALE CON LA SCELTA DELL'UTENTE E DICHIARO CHI HA VINTO 
if (result == even_odd){
    console.log('hai vinto')
}
else{
    console.log('hai perso')
}