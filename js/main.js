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
      }

      document.getElementById("costoBiglietto").innerHTML = (prezzoFinale).toFixed(2) + "€";


    }
);


console.log("Fine!");
