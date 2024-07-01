const isPrime = (n: number): Promise<{ prime: boolean; }> => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            return reject({ prime: false });
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                return reject({ prime: false });
            }
        }
        return resolve({ prime: true });
    });
};

// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');

console.log('start');
(async () => {
    try {
        const result = await isPrime(8);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
console.log('end');




