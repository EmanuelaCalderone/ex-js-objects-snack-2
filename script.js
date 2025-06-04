/*1° Code Question
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?  Double Cheese Burger
console.log(secondBurger.name); // ? Double Cheese Burger 

//RISPOSTA: oggetti creati in memoria: 1

/*2° Code Question
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?  "Salad"
console.log(secondBurger.ingredients[0]); // ? "Salad"

//RISPOSTA: oggetti creati in memoria: 3 (hamburger con relativo array di ingredienti, 2°hamburger ma non crea un nuovo array, è solo lo stesso array referenziato perché lo spread non copia gli oggetti annidati)

/*3° Code Question
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? */

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//RISPOSTA: oggetti creati in memoria: 9 (hamburger, secondBurger, thirdBurger, ognuno con i relativi maker e restarant, quindi 3 burger, 3 weight e 3 maker)

/*4° Code Question
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?*/

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

/*RISPOSTA: 1. Spread, perché clona anche le funzioni 
            2. structuredClone, perché clona anche gli oggetti complessi come new Date()*/

/*BONUS Code Question °5
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?  Chef Hyurs
console.log(secondBurger.maker.name); // ? Chef Hyurs
console.log(hamburger.maker.restaurant.name); // ? Hyur's II
console.log(secondBurger.maker.restaurant.name); // ? Hyur's II

//RISPOSTA 5 oggetti creati: hamburger, maker, restaurant, newReastaurant e secondBurger; lo spread non copia gli oggetti annidati

/*BONUS Code Question °6
Qual è il metodo migliore per clonare l’oggetto chef, e perché?*/

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

//RISPOSTA: Spread, perché copia anche le funzioni

/*Edit dopo aver visto la soluzione: Spread non copia gli oggetti annidati quindi in questo caso bisogna usare 3 spread 
const chefCopy = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    }
}
    */
