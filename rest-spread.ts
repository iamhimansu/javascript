function sum(...args: Array<number>) {
    let total: number = 0;
    for (const arg of args) {
        total += arg;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));


const num1: Array<number> = [1, 2, 3, 4, 5, 6];

const num2: Array<number> = [...num1];

console.log(num1 === num2);

console.log(JSON.stringify(num1) === JSON.stringify(num2));