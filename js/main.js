const km = kmDaPercorrere.value;
const genera = document.querySelector('#genera');
const prezzoPieno = (km * 0.21);
const sconto20 = (prezzoPieno / 100 * 20); //per sapere di quanto verrà scontato il prezzo
const sconto40 = (prezzoPieno / 100 * 40); //per sapere di quanto verrà scontato il prezzo
let prezzoFinale;
const etaDom = document.getElementById('eta').value;

genera.addEventListener('click', 
   function () {
      
      const nomeDom = document.getElementById('nome').value;
      document.getElementById("rNome").innerHTML = nomeDom;

      if (etaDom == 'Minorenne') {
         document.getElementById("tipoBiglietto").innerHTML = "Sconto (20%) Minorenne";
         prezzoFinale = prezzoPieno - sconto20; 
      } else if (etaDom == 'Over65') {
         document.getElementById("tipoBiglietto").innerHTML = "Sconto (40%) Over65";
         prezzoFinale = prezzoPieno - sconto40;
      } else if (etaDom == 'Maggiorenne') {
         document.getElementById("tipoBiglietto").innerHTML = "Biglietto Standard";
         prezzoFinale = prezzoPieno;
      } else {
         document.getElementById("tipoBiglietto").innerHTML = "Prego compilare correttamente i campi";
         prezzoFinale = 'Errore'; //è voluta, cosi facendo il programma si rompe e non genera il biglietto. perchè 'Errore' non è un numero.
      }

      document.getElementById("costoBiglietto").innerHTML = (prezzoFinale).toFixed(2) + "€";

      const numeroCarrozza = Math.floor(Math.random() * 21) + 1;
      document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;

      const codice = Math.floor(Math.random() * 10000) + 90000;
      document.getElementById("codiceCp").innerHTML = codice;

      const biglietto = document.getElementById("biglietto");
      biglietto.className = "";
   }
);

const formReset = document.querySelector('#annulla');

formReset.addEventListener('click', 
   function() {
      const nomeDom = document.getElementById('nome');
      nomeDom.value = "";
      const kmDaPercorrere = document.getElementById('kmDaPercorrere');
      kmDaPercorrere.value = "";
      const etaDom = document.getElementById('eta');
      etaDom.value = " ";
      const biglietto = document.getElementById("biglietto");
      biglietto.className = "d-none";
   }
);

console.log("Fine!");