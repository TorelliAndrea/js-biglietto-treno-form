const genera = document.querySelector('#genera');

genera.addEventListener('click', 
    function () {
        const messaggioDom = document.getElementById('messaggio');
        const testoDelMessaggio = messaggioDom.value;
        alert(testoDelMessaggio);

        const casellaSelezioneDom = document.getElementById('casellaSelezione');
        alert(casellaSelezioneDom.value);
    }
);




/*
document.getElementById("km").innerHTML = "Km da percorrere: " + km; 
document.getElementById("eta").innerHTML = "Età: " + eta; 

const prezzoPieno = (km * 0.21);
document.getElementById("prezzoPieno").innerHTML = "Il prezzo del biglietto è: " + (prezzoPieno).toFixed(2) + "€";

const sconto20 = (prezzoPieno / 100 * 20); //per sapere di quanto verrà scontato il prezzo
const sconto40 = (prezzoPieno / 100 * 40); //per sapere di quanto verrà scontato il prezzo

let prezzoFinale;

if (eta <= 17) {
   document.getElementById("sconto").innerHTML = "Visto che sei un* pischell*, ti facciamo uno sconto di: " + (sconto20).toFixed(2) + "€";
   prezzoFinale = prezzoPieno - sconto20;
} else if (eta >= 65) {
   document.getElementById("sconto").innerHTML = "Sconto vecchi di: " + (sconto40).toFixed(2) + "€";
   prezzoFinale = prezzoPieno - sconto40;
} else {
   document.getElementById("sconto").innerHTML = "tè un sfighé...";
   prezzoFinale = prezzoPieno;
}

document.getElementById("prezzoFinale").innerHTML = "Paga: " + (prezzoFinale).toFixed(2) + "€";

*/



console.log("Fine!");
