// Funzione per verificare se il veicolo entra nel garage
document.getElementById("verifica-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lettura dei valori inseriti dall'utente
    const passo = parseFloat(document.getElementById("passo").value);
    const altezzaVeicolo = parseFloat(document.getElementById("altezza-veicolo").value);
    const altezzaGarage = parseFloat(document.getElementById("altezza-garage").value);
    const pendenzaRampa = parseFloat(document.getElementById("pendenza-rampa").value);

    // Calcolo dell'angolo della rampa come decimale
    const angoloRampa = (pendenzaRampa / 100.0);

    // Calcolo dell'altezza massima del veicolo mentre attraversa la rampa
    const altezzaMassimaVeicolo = altezzaVeicolo + (passo * angoloRampa);

    // Verifica se l'altezza del veicolo supera l'altezza del garage
    const risultato = altezzaMassimaVeicolo < altezzaGarage
        ? "Il veicolo può entrare nel garage senza problemi!"
        : "Attenzione! Il veicolo potrebbe urtare il soffitto del garage.";

    // Visualizza il risultato
    document.getElementById("risultato").textContent = risultato;
});
