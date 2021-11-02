
const container = document.querySelector('.container');
const listNumbers = [];
const button = document.getElementById("mode_btn");
let select_mode = document.getElementById("select_mode");




button.addEventListener("click", function(){


    container.innerHTML = "";
    let grid = 0;
    if(select_mode.value == "easy"){
        grid = 100;
        
    } else if(select_mode.value == "normal"){
        grid = 81;
       
    } else {
        grid = 49;
       
    };

    console.log(grid)

    init(grid);

})



function init(tot){
    for(let i = 0; i < tot; i++){

        console.log(tot);

        // creo l'elemento square e lo aggiungo al container
        const sq = createSquare(container);
    
        sq.addEventListener('click',function(){
          //  console.log(this);
            this.classList.add('clicked');
        })
    
    }
    
}

/**
 * Generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquare(target){
    let grid = 0;
    if(select_mode.value == "easy"){
        grid = 100;
    } else if(select_mode.value == "normal"){
        grid = 81;

    } else {
        grid = 49;
 
    };

    console.log(grid)

    const sq = document.createElement('div');
    const numRandom = generateUniqueRandomInt(listNumbers, 1 , grid);

    // even o odd con la funzione
    //const classes = ['square',getEvenOdd(numRandom)]

    // even o odd con operatore ternario
    
    let class_mode = '';
    if(select_mode.value == "easy"){
        class_mode = 'square_easy';

    } else if(select_mode.value == "normal"){
        class_mode = 'square_normal';
 
    } else {
        class_mode = 'square_crazy';
    }

    console.log(class_mode)

    const classes = [class_mode, (numRandom % 2) ? 'odd' : 'even'];
    console.log(classes);

    sq.innerHTML = `<span>${numRandom}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
}


/**
 * Generatore di numeri random unici
 * @param {array} list 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function generateUniqueRandomInt(list, min, max){
    // devo generare un numero random, verificare se esiste, Se non c'è lo aggiungo allelenco altrimenti ne estraggo un'altro
    let number = null, valid = false;

     // controllo di unicità
    while(!valid){
       // console.log(number);
        number = generateRandomInt(min,max);
        if(!list.includes(number)) {
            valid = true;
            list.push(number);
        }
    }
    return number;
}

/**
 * Generatore di numeri random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function generateRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Restituisce odd o even
 * @param {number} n 
 * @returns 
 */
function getEvenOdd(n){
    if(n % 2) return 'odd';
    return 'even';
}