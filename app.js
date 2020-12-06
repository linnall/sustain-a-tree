const plus1 = document.querySelector('#plus-button-1');
const fill1 = document.querySelector('#fill-1');
const count1 = document.querySelector('#count-1')
const minus1 = document.querySelector('#minus-button-1');
const reset1 = document.querySelector('#reset-1'); 

let size1 = 0;
let counter1 = 0;

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
