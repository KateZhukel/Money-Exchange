// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0 ){
        return {};
    }
    if (currency > 10000){
        return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
    }
    let obj = {};
    let h,q,d,n,p;
    h = div(currency,50);
    currency = currency % 50;
    q = div(currency,25);
    currency = currency % 25;
    d = div(currency,10);
    currency = currency % 10;
    n = div(currency,5);
    p = currency % 5;
    if(h !== 0){
        obj.H = h
    }
    if(q !== 0){
        obj.Q = q
    }
    if(d !== 0){
        obj.D = d
    }
    if(n !== 0){
        obj.N = n
    }
    if(p !== 0){
        obj.P = p
    }
    return obj;
};
function div(x, y){
    return (x - x % y) / y;
}
