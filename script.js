// Fare loop dei numeri da 1 a 100

// Se i numeri sono diviibili sia per 3 che per 5 stampare FizzBuzz

// Se sono divisibili per 3 stampare Fizz

// Se sono divisibili per 5 stamaper Buzz

// Stamapare tutti gli altri numeri che non sono divisibili 


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }

    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

