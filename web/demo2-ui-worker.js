onmessage = (event) => {
    let m = event.data.m;
    let n = event.data.n;
    postMessage(inclement_sum(m,n));
}

function inclement_sum(m,n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i * m;
    }
    return result;
}
