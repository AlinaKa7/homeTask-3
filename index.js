first = prompt('Please enter first value.');
second = prompt('Please enter second value.');
adding = +first + +second;
minus = first - second;
multiply = first * second;
devide = first / second;
alert('If to add, the result is ' + adding);
alert('If to substract, the result is ' + minus);
alert('If to multiply, the result is ' + multiply);
alert('If to devide, the result is ' + devide);

//правильний варіант:

first = +prompt('Please enter first value.'); //одразу додати + щоб перетворити строку у цифру, бо prompt перетворює у строку
second = +prompt('Please enter second value.');
adding = first + second;
minus = first - second;
multiply = first * second;
devide = first / second;
alert(`Your result:
    adding: ${adding};
    minus: ${minus};
    multiply: ${multiply};
    devide: ${devide};
`);
