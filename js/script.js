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


/* Lista Cognomi:
1. Chiedi all’utente il cognome ed inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
2. Stampa la lista ordinata alfabeticamente e scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.*/ 