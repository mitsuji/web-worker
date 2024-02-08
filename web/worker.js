onmessage = (event) => {
    let m = event.data.m;
    let n = event.data.n;
    postMessage(increment_sum(m,n));
}

function increment_sum(m,n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i * m;
    }
    return result;
}
