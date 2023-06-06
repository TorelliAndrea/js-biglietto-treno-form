const genera = document.querySelector('#genera');

genera.addEventListener('click', 
   function () {
      
      const etaDom = document.getElementById('eta').value;
      const nomeDom = document.getElementById('nome').value;
      const kmDom = document.getElementById("kmDaPercorrere").value;
      const prezzoPieno = kmDom * 0.21;
      const sconto20 = (prezzoPieno / 100 * 20); //per sapere di quanto verrà scontato il prezzo
      const sconto40 = (prezzoPieno / 100 * 40); //per sapere di quanto verrà scontato il prezzo
      let prezzoFinale;

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

      document.getElementById("rNome").innerHTML = nomeDom;

      document.getElementById("costoBiglietto").innerHTML = (prezzoFinale).toFixed(2) + "€";

      const numeroCarrozza = Math.floor(Math.random() * 21) + 1;
      document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;

      const codice = Math.floor(Math.random() * 10000) + 90000;
      document.getElementById("codiceCp").innerHTML = codice;

      const biglietto = document.getElementById("biglietto");
      biglietto.className =  "";
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
