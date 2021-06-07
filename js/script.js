/* Mail:
1. Chiedi all’utente la sua email,
2. Controlla che sia nella lista di chi può accedere, quindi stampa un messaggio appropriato sull’esito del controllo.*/

var acceptedEmails = [ 'piero@gmail.com', 'pluto@gmail.com', 'pippo@gmail.com', 'topolino@gmail.com', 'paperino@gmail.com'];

var nuovaEmail = prompt('Inserisci il tuo indirizzo mail');

if (acceptedEmails.includes(nuovaEmail)) {
    document.getElementById('mail-massage').innerHTML = 'Il tuo indirizzo mail è già presente nella lista' ;
} else {
    document.getElementById('mail-massage').innerHTML = 'Il tuo indirizzo mail è stato aggiunto correttamente alla lista' ;
    
}

// ----------Soluzione con FOR-----------//

// var trovato = false

// for(var i= 0; i < acceptedEmails.length; i++){
//     if(nuovaEmail == acceptedEmails[i]){
//         trovato = true;
//     }
// }

// if (trovato == true) {
//     console.log('email trovata');
// } else {
//     console.log('email  non-trovata');
// }


// ----------Soluzione con WHILE-----------//

// var trovato = false

// var i= 0;

// while( i < acceptedEmails.length){
//    if(nuovaEmail == acceptedEmails[i]){
//        trovato = true;
//    }
//    i++
// }


// if (trovato == true) {
//     console.log('email trovata');
// } else {
//     console.log('email  non-trovata');
// }



/* Lista Cognomi:
1. Chiedi all’utente il cognome ed inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
2. Stampa la lista ordinata alfabeticamente e scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.*/ 

var lastName = ['Bianchi','Neri','Rossi','Verdi','Gialli'];

var myLastName = prompt('Inserisci il tuo cognome');

myLastName = myLastName.charAt(0).toUpperCase() + myLastName.slice(1).toLowerCase();

lastName.push(myLastName);

lastName.sort();

for(var i = 0; i < lastName.length; i++ ){
    document.getElementById('lastname-list').innerHTML += (i +1) + '.' + lastName[i] + '<br>';
}
