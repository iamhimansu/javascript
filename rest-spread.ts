function sum(...args: Array<number>) {
    let total: number = 0;
    for (const arg of args) {
        total += arg;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));


