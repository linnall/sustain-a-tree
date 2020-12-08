//Progress bar objects
const waterBottleBar = {
    plusBtn: document.querySelector('#plus-button-1'),
    minusBtn: document.querySelector('#minus-button-1'),
    resetBtn: document.querySelector('#reset-1'),
    fill: document.querySelector('#fill-1'),
    countDisplay: document.querySelector('#count-1'),
    size: 0,
    counter: 0
}

const groceryBagBar = {
    plusBtn: document.querySelector('#plus-button-2'),
    minusBtn: document.querySelector('#minus-button-2'),
    resetBtn: document.querySelector('#reset-2'),
    fill: document.querySelector('#fill-2'),
    countDisplay: document.querySelector('#count-2'),
    size: 0,
    counter: 0
}

const refusingBar = {
    plusBtn: document.querySelector('#plus-button-3'),
    minusBtn: document.querySelector('#minus-button-3'),
    resetBtn: document.querySelector('#reset-3'),
    fill: document.querySelector('#fill-3'),
    countDisplay: document.querySelector('#count-3'),
    size: 0,
    counter: 0
}

const compostBar = {
    plusBtn: document.querySelector('#plus-button-4'),
    minusBtn: document.querySelector('#minus-button-4'),
    resetBtn: document.querySelector('#reset-4'),
    fill: document.querySelector('#fill-4'),
    countDisplay: document.querySelector('#count-4'),
    size: 0,
    counter: 0
}

// === reusable functions ===
function clickPlus(bar) {

    if(!(bar.counter % 10)){
        bar.size = 9.75;
    }else {
        bar.size += 9.75;
    }
    bar.counter += 1; 

    bar.fill.style.width = `${bar.size}%`;
    bar.countDisplay.innerHTML = `${bar.counter}`;
} 

function clickMinus(bar) {
    if(bar.counter >= 10 && !((bar.counter-1) % 10)){
        bar.size = 97.5;
        bar.counter--;
    }else if(bar.counter > 0){
        bar.size -= 9.75;
        bar.counter--;
    }

    bar.fill.style.width = `${bar.size}%`;
    bar.countDisplay.innerHTML = `${bar.counter}`;
}

function clickReset(bar) {
    bar.size = 0;
    bar.counter = 0;
    bar.fill.style.width = `${bar.size}%`;
    bar.countDisplay.innerHTML = `${bar.counter}`;
}

//=========================================
//Reusable Water Bottle Bar
waterBottleBar.plusBtn.addEventListener('click', function (){
    clickPlus(waterBottleBar);
});

waterBottleBar.minusBtn.addEventListener('click', function () {
    clickMinus(waterBottleBar);
});

waterBottleBar.resetBtn.addEventListener('click', function () {
    clickReset(waterBottleBar);
});

//Grocery Bag Bar
groceryBagBar.plusBtn.addEventListener('click', function (){
    clickPlus(groceryBagBar);
});

groceryBagBar.minusBtn.addEventListener('click', function () {
    clickMinus(groceryBagBar);
});

groceryBagBar.resetBtn.addEventListener('click', function () {
    clickReset(groceryBagBar);
});

//Refusing Bar
refusingBar.plusBtn.addEventListener('click', function (){
    clickPlus(refusingBar);
});

refusingBar.minusBtn.addEventListener('click', function () {
    clickMinus(refusingBar);
});

refusingBar.resetBtn.addEventListener('click', function () {
    clickReset(refusingBar);
});

//Compost Bar
compostBar.plusBtn.addEventListener('click', function (){
    clickPlus(compostBar);
});

compostBar.minusBtn.addEventListener('click', function () {
    clickMinus(compostBar);
});

compostBar.resetBtn.addEventListener('click', function () {
    clickReset(compostBar);
});