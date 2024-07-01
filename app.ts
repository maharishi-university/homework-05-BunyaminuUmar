const OrderPizzaRanch = () => {

    //return 'pizza';
    return new Promise((resolve, reject) => {
        console.log('Preparing pizza');
        resolve('peproni pizza'); // return value Async
        reject('No more Cheese'); // throw an error Async
    });
};

// const delivery = OrderPizzaRanch();
// OrderPizzaRanch();
// console.log('eating' + delivery);
// console.log('finish my homework');
OrderPizzaRanch()
    .then(resolve => console.log('eating' + resolve)) //Async
    .catch(reject => console.log('Cry and sleep ' + reject)); //Async
console.log('finish my home work');