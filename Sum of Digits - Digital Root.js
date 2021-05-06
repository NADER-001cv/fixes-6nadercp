

function digital_root(n) {
    res = (n-1)% 9 +1;

    return res;
}

console.log(digital_root(665222198));
