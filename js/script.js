//voglio trovare il valore minore di arr
//cerca sempre la soluzione che usi meno codice e quindi meno tempo!
//- tempo significa meno soldi da spendere quindi è ottimo nel mondo del lavoro

/*
let arr = gen(10000);
console.log(arr.length);


timeit(() => {
    let minValue =arr[0];
    arr.forEach(element => {
        if(element < minValue) {
            minValue = element;
        }
    });
});
*/

// prima consoletime()  poi consoletimeend()
//sono utilissime per capire quanto tempo impiega tra un istruzuione ed un altra, è utlissimo per capire quale processo è il più rapido 


//ex02

const iconsData = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

//se piazzassi il codice nella funzione delle icone finirei che creare codici colore ogni volta che cambio valore in select quindi 
//adesso per ogni elemento in array sostituisco il valore di color con il prodotto della mia funzione;
iconsData.forEach(el =>{ el.color = generateColor();});

//voglio una funzione che mi crei un codice esadecimale di palette
function generateColor() {
    //creo una const con tutti i valori in una stringa
    //anche una strigna puo essere considerata un'array es char[2], mi pesca c
    let char = 'abcdef1234567890';
    //il codice esadecimale inizia con# quindi creo una const che riceverà i caratteri estratti 
    let color = '#';
    //ciclo per tante volte quante un codice esacedimale composto da 6 elementi
    for(let i = 0; i < 6; i++) {
        //per ogni volta che ciclo estraggo un carattere da char e lo pusho in color
        color += char[Math.floor(Math.random()* char.length)];
    };
};

const iconContainer = document.querySelector('.icon-container');
const selectTypeEl = document.getElementById('icon-type');

//voglio popolare le option del select dinamicamente ovvero, se volessi piazzare altre option al select ? 
function generateSelect() {
    //const option = document.createElement('option');
    const optionvalues = [];
    //ti rcirdi le mine ? se il valore non è gia incluso in type pushamelo in array optionvalues
    iconsData.forEach((el) => {
        if(!optionvalues.includes(el.type)) {
            optionvalues.push(el.type);
        };
    });
    console.log(optionvalues);
    //ora pero dovrò stmparla 
    optionvalues.forEach((el) => {
        const option = document.createElement('option');
        option.setAttribute('value', el);
        option.innerText = el;
        selectTypeEl.append(option);
    });
};

//voglio stmpare le icone nell'html
function displayIcons(icons) {
    //svuola il container ogni volta che mi crea un funzione, questo per evitare che al cambio di select mi sovrapponga le icone con le icone fitrate
    iconContainer.innerHTML = '';

    icons.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `
            <i class="${element.family} ${element.prefix}${element.name}"></i>
            <p>${element.name}</p>
        `;
        iconContainer.append(div);
    });
};

displayIcons(iconsData);

//voglio che al cambio di valore del select mi mostri solo alcune icone 
//a sto giro uso un 'change' invece che un click 
selectTypeEl.addEventListener('change', function(){
    let selector = selectTypeEl.value;
    if(selector === 'all') {
        displayIcons(iconsData);
    } else if (selector === 'animal') {
        const filtered = iconsData.filter((el) =>{
            //riportami un gruppo che abbia lo stesso type selzionato dal select! e cosi evito di dover designare tutti gli altri casi
            return el.type === selector;
        });
        displayIcons(filtered);
    };
});



