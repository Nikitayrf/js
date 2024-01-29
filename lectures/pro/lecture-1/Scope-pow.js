const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
};

const cachedPow = closureFunction();
console.log(cachedPow(2));  // 4
console.log(cachedPow(8));  // 64
console.log(cachedPow(2));  // 4