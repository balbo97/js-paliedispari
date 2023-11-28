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