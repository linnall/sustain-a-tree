const plus1 = document.querySelector('#plus-button-1');
const fill1 = document.querySelector('#fill-1');
const count1 = document.querySelector('#count-1')
const minus1 = document.querySelector('#minus-button-1');
const reset1 = document.querySelector('#reset-1'); 

const plus2 = document.querySelector('#plus-button-2');
const fill2 = document.querySelector('#fill-2');
const count2 = document.querySelector('#count-2')
const minus2 = document.querySelector('#minus-button-2');
const reset2 = document.querySelector('#reset-2'); 

const plus3 = document.querySelector('#plus-button-3');
const fill3 = document.querySelector('#fill-3');
const count3 = document.querySelector('#count-3')
const minus3 = document.querySelector('#minus-button-3');
const reset3 = document.querySelector('#reset-3'); 

const plus4 = document.querySelector('#plus-button-4');
const fill4 = document.querySelector('#fill-4');
const count4 = document.querySelector('#count-4')
const minus4 = document.querySelector('#minus-button-4');
const reset4 = document.querySelector('#reset-4'); 

let size1 = 0;
let counter1 = 0;

let size2 = 0;
let counter2 = 0;

let size3 = 0;
let counter3 = 0;

let size4 = 0;
let counter4 = 0;

//=========================================
//Reusable Water Bottle
plus1.onclick = function () {

    if(!(counter1 % 10)){
        size1 = 9.75;
    }else {
        size1 += 9.75;
    }
    counter1 += 1; 

    fill1.style.width = `${size1}%`;
    count1.innerHTML = `${counter1}`;
}

minus1.onclick = function () {
    if(counter1 >= 10 && !((counter1-1) % 10)){
        size1 = 97.5;
        counter1--;
    }else if(counter1 > 0){
        size1 -= 9.75;
        counter1--;
    }

    fill1.style.width = `${size1}%`;
    count1.innerHTML = `${counter1}`;
}

reset1.onclick = function () {
    size1 = 0;
    counter1 = 0;
    fill1.style.width = `${size1}%`;
    count1.innerHTML = `${counter1}`;
}
//=========================================
//Reusable Grocery Bag
plus2.onclick = function () {

    if(!(counter2 % 10)){
        size2 = 9.75;
    }else {
        size2 += 9.75;
    }
    counter2 += 1; 

    fill2.style.width = `${size2}%`;
    count2.innerHTML = `${counter2}`;
}

minus2.onclick = function () {
    if(counter2 >= 10 && !((counter2-1) % 10)){
        size2 = 97.5;
        counter2--;
    }else if(counter2 > 0){
        size2 -= 9.75;
        counter2--;
    }

    fill2.style.width = `${size2}%`;
    count2.innerHTML = `${counter2}`;
}

reset2.onclick = function () {
    size2 = 0;
    counter2 = 0;
    fill2.style.width = `${size2}%`;
    count2.innerHTML = `${counter2}`;
}
//=========================================
//Refusing Sign
plus3.onclick = function () {

    if(!(counter3 % 10)){
        size3 = 9.75;
    }else {
        size3 += 9.75;
    }
    counter3 += 1; 

    fill3.style.width = `${size3}%`;
    count3.innerHTML = `${counter3}`;
}

minus3.onclick = function () {
    if(counter3 >= 10 && !((counter3-1) % 10)){
        size3 = 97.5;
        counter3--;
    }else if(counter3 > 0){
        size3 -= 9.75;
        counter3--;
    }

    fill3.style.width = `${size3}%`;
    count3.innerHTML = `${counter3}`;
}

reset3.onclick = function () {
    size3 = 0;
    counter3 = 0;
    fill3.style.width = `${size3}%`;
    count3.innerHTML = `${counter3}`;
}
//=========================================
//Compost
plus4.onclick = function () {

    if(!(counter4 % 10)){
        size4 = 9.75;
    }else {
        size4 += 9.75;
    }
    counter4 += 1; 

    fill4.style.width = `${size4}%`;
    count4.innerHTML = `${counter4}`;
}

minus4.onclick = function () {
    if(counter4 >= 10 && !((counter4-1) % 10)){
        size4 = 97.5;
        counter4--;
    }else if(counter4 > 0){
        size4 -= 9.75;
        counter4--;
    }

    fill4.style.width = `${size4}%`;
    count4.innerHTML = `${counter4}`;
}

reset4.onclick = function () {
    size4 = 0;
    counter4 = 0;
    fill4.style.width = `${size4}%`;
    count4.innerHTML = `${counter4}`;
}