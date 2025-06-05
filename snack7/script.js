
/*BONUS Snack °7
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).*/

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

// Funzione che fa una copia profonda dell’oggetto (deep copy)
function deepCopy(obj) {
    // Caso base: se non è un oggetto o è null o è un array, restituisci il valore così com'è
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return obj; // qui si fermano ricorsione e copia
    }

    const copy = {}; // crea un nuovo oggetto vuoto per la copia

    // Scorri tutte le chiavi (proprietà) dell’oggetto
    for (const key in obj) {
        // Chiamata ricorsiva: copia anche le proprietà annidate
        copy[key] = deepCopy(obj[key]);
    }

    return copy; // restituisci l’oggetto copiato
}

// Usiamo la funzione per creare una copia profonda di chef
console.log(deepCopy(chef));

